import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import notificationService from '../services/notificationService';

const services = [
  'Mobile App Development',
  'Web Development',
  'AI Automation',
  'Blockchain Solutions',
  'Cloud & DevOps',
  'Other',
];

export default function ContactScreen() {
  const route = useRoute();
  const preselectedService = route.params?.serviceName || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService,
    message: '',
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const openWhatsApp = () => {
    const phoneNumber = '97143976100';
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    const webWhatsappUrl = `https://wa.me/${phoneNumber}`;
    
    Linking.canOpenURL(whatsappUrl).then((supported) => {
      if (supported) {
        Linking.openURL(whatsappUrl);
      } else {
        Linking.canOpenURL(webWhatsappUrl).then((webSupported) => {
          if (webSupported) {
            Linking.openURL(webWhatsappUrl);
          } else {
            Alert.alert(
              'WhatsApp Not Found',
              'WhatsApp is not installed. Would you like to call instead?',
              [
                { text: 'Cancel', style: 'cancel' },
                {
                  text: 'Call',
                  onPress: () => Linking.openURL('tel:+97143976100'),
                },
              ]
            );
          }
        }).catch(() => {
          Linking.openURL('tel:+97143976100');
        });
      }
    }).catch((err) => {
      console.error('Error opening WhatsApp:', err);
      Linking.openURL('tel:+97143976100');
    });
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    try {
      await notificationService.sendFormSubmissionNotification(formData);
    } catch (error) {
      console.error('Error sending notification:', error);
    }

    Alert.alert(
      'Request Submitted',
      `Thank you for contacting Tubex Dubai! We will get back to you shortly.`,
      [
        {
          text: 'OK',
          onPress: () => {
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: preselectedService,
              message: '',
            });
          },
        },
        {
          text: 'Send Email',
          onPress: () => {
            const subject = encodeURIComponent(formData.service ? `Inquiry: ${formData.service}` : 'Contact Inquiry');
            const body = encodeURIComponent(
              `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message || 'No message provided'}`
            );
            const mailtoLink = `mailto:info@tubexdubai.com?subject=${subject}&body=${body}`;
            
            Linking.canOpenURL(mailtoLink).then((supported) => {
              if (supported) {
                Linking.openURL(mailtoLink);
              }
            });
            
            setFormData({
              name: '',
              email: '',
              phone: '',
              service: preselectedService,
              message: '',
            });
          },
        },
      ]
    );
  };

  const contactMethods = [
    {
      icon: 'location',
      label: 'Address',
      value: 'Office No 15-17-19, M floor\nAl Manazel Building - Al Garhoud\nDubai UAE',
      color: '#4A90E2',
      action: null,
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'info@tubexdubai.com',
      color: '#50C878',
      action: () => Linking.openURL('mailto:info@tubexdubai.com'),
    },
    {
      icon: 'chatbubble-ellipses',
      label: 'WhatsApp',
      value: '+971 4 397 6100',
      color: '#25D366',
      action: openWhatsApp,
    },
    {
      icon: 'time',
      label: 'Business Hours',
      value: 'Mon-Fri: 09:00 AM – 05:00 PM\nSat-Sun: Closed',
      color: '#FF6B6B',
      action: null,
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Contact Us</Text>
            <Text style={styles.headerSubtitle}>Get in touch with our team</Text>
          </View>

          {/* Contact Methods */}
          <View style={styles.contactMethodsSection}>
            {contactMethods.map((method, index) => (
              <TouchableOpacity
                key={index}
                style={styles.contactMethodCard}
                onPress={method.action}
                activeOpacity={method.action ? 0.7 : 1}
                disabled={!method.action}
              >
                <View style={[styles.contactIcon, { backgroundColor: `${method.color}20` }]}>
                  <Ionicons name={method.icon} size={24} color={method.color} />
                </View>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactLabel}>{method.label}</Text>
                  <Text style={styles.contactValue}>{method.value}</Text>
                </View>
                {method.action && (
                  <Ionicons name="chevron-forward" size={20} color="#666" />
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Form Section */}
          <View style={styles.formSection}>
            <Text style={styles.formTitle}>Send Message</Text>
            
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Full Name *"
                placeholderTextColor="#999"
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email Address *"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="call-outline" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Phone Number *"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="briefcase-outline" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Service Interested In"
                placeholderTextColor="#999"
                value={formData.service}
                onChangeText={(value) => handleInputChange('service', value)}
              />
            </View>

            <View style={[styles.inputContainer, styles.textAreaContainer]}>
              <Ionicons name="chatbubble-outline" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Your Message"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                value={formData.message}
                onChangeText={(value) => handleInputChange('message', value)}
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
              activeOpacity={0.8}
            >
              <LinearGradient
                colors={['#4A90E2', '#357ABD']}
                style={styles.submitGradient}
              >
                <Ionicons name="send" size={20} color="#FFFFFF" />
                <Text style={styles.submitText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0A1628',
  },
  container: {
    flex: 1,
    backgroundColor: '#0A1628',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: '#1A1A2E',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A3E',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
  contactMethodsSection: {
    padding: 16,
  },
  contactMethodCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2A2A3E',
  },
  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contactValue: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  formSection: {
    padding: 16,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A3E',
    marginBottom: 12,
    paddingHorizontal: 16,
    minHeight: 52,
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#FFFFFF',
    paddingVertical: 14,
  },
  textAreaContainer: {
    alignItems: 'flex-start',
    paddingVertical: 12,
    minHeight: 120,
  },
  textArea: {
    minHeight: 100,
    paddingTop: 12,
  },
  submitButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  },
  submitGradient: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
