import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Notifications from 'expo-notifications';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/SplashScreen';
import notificationService from './services/notificationService';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Register for push notifications (will skip if running in Expo Go)
    notificationService.registerForPushNotificationsAsync().then((token) => {
      if (token) {
        console.log('Push notification token registered:', token);
      } else if (notificationService.isRunningInExpoGo()) {
        console.log('Running in Expo Go - Local notifications will work, but push notifications require a development build.');
      }
    }).catch((error) => {
      console.log('Notification registration error (non-critical):', error.message);
    });

    // Handle notifications received while app is in foreground
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      console.log('Notification received:', notification);
    });

    // Handle user tapping on notification
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log('Notification response:', response);
      const data = response.notification.request.content.data;
      if (data && data.type === 'form_submission') {
        // Handle navigation or other actions based on notification data
        console.log('Form submission notification tapped:', data);
      }
    });

    // Simulate splash screen delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

