import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Configure how notifications are handled when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

class NotificationService {
  constructor() {
    this.expoPushToken = null;
    // 'storeClient' = Expo Go, 'standalone' = production build, 'bare' = bare React Native
    this.isExpoGo = Constants.executionEnvironment === 'storeClient';
    this.isProduction = Constants.executionEnvironment === 'standalone' || Constants.executionEnvironment === 'bare';
  }

  /**
   * Check if running in Expo Go
   */
  isRunningInExpoGo() {
    return this.isExpoGo;
  }

  /**
   * Check if running in production build
   */
  isRunningInProduction() {
    return this.isProduction;
  }

  /**
   * Request notification permissions and get push token
   * Note: Push notifications (remote) don't work in Expo Go (SDK 53+)
   * Local notifications will still work
   */
  async registerForPushNotificationsAsync() {
    // Skip push token registration if running in Expo Go
    // In production builds (standalone/bare), push notifications will work
    if (this.isExpoGo) {
      console.log('Running in Expo Go - Push notifications are not available. Local notifications will still work.');
      return null;
    }

    let token;

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#4A90E2',
        sound: 'default',
      });
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.warn('Failed to get push token for push notification!');
      return null;
    }

    try {
      const projectId = '133bee5a-79c5-4bcc-b3e9-a838a892bcc7'; // From app.json
      token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
      this.expoPushToken = token;
      console.log('Expo Push Token:', token);
    } catch (error) {
      console.error('Error getting push token:', error);
      // Don't throw - local notifications will still work
      token = null;
    }

    return token;
  }

  /**
   * Schedule a local notification
   * This works in both Expo Go and development builds
   */
  async scheduleLocalNotification(title, body, data = {}) {
    try {
      // Request permissions first if not already granted
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }

      // Set up Android channel if on Android
      if (Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#4A90E2',
          sound: 'default',
        });
      }

      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          data,
          sound: true,
          priority: Notifications.AndroidNotificationPriority.HIGH,
        },
        trigger: null, // Show immediately
      });
      return true;
    } catch (error) {
      console.error('Error scheduling notification:', error);
      return false;
    }
  }

  /**
   * Send a push notification with form submission details
   */
  async sendFormSubmissionNotification(formData) {
    const title = '📧 New Contact Form Submission';
    const serviceText = formData.service ? `Service: ${formData.service}` : 'General Inquiry';
    const body = `${formData.name}\n${formData.email}\n${formData.phone}\n${serviceText}`;
    
    const notificationData = {
      type: 'form_submission',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || 'General Inquiry',
      message: formData.message || 'No message provided',
      timestamp: new Date().toISOString(),
    };

    // Schedule local notification with detailed body
    await this.scheduleLocalNotification(title, body, notificationData);

    // If you have a backend server, you can also send push notification via Expo Push API
    // This would require the expoPushToken to be stored on your server
    if (this.expoPushToken) {
      // You can send this to your backend to forward to other devices
      console.log('Push token available for server-side notifications:', this.expoPushToken);
    }

    return notificationData;
  }

  /**
   * Cancel all notifications
   */
  async cancelAllNotifications() {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  /**
   * Get all notification permissions status
   */
  async getPermissionsStatus() {
    return await Notifications.getPermissionsAsync();
  }
}

export default new NotificationService();

