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
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

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

  const handleSubmit = () => {
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    // Show success alert with email info
    Alert.alert(
      'Request Submitted',
      `Thank you for contacting Tubex Dubai! Your message will be sent to info@tubexdubai.com. We will get back to you shortly.`,
      [
        {
          text: 'OK',
          onPress: () => {
            // Reset form
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
            // Create mailto link with form data
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
            
            // Reset form
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

  return (
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
        <LinearGradient
          colors={['#0A1628', '#1A1A2E']}
          style={styles.header}
        >
          <Ionicons name="mail-outline" size={48} color="#4A90E2" />
          <Text style={styles.headerTitle}>Get In Touch</Text>
          <Text style={styles.headerSubtitle}>
            Ready to transform your business? Let's discuss your project.
          </Text>
        </LinearGradient>

        {/* Contact Information Section */}
        <View style={styles.contactInfoSection}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          
          <View style={styles.contactItem}>
            <View style={styles.contactIconContainer}>
              <Ionicons name="location-outline" size={24} color="#4A90E2" />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Address</Text>
              <Text style={styles.contactValue}>
                Office No 15-17-19, M floor{'\n'}
                Al Manazel Building - Al Garhoud{'\n'}
                Dubai UAE
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('mailto:info@tubexdubai.com')}
            activeOpacity={0.7}
          >
            <View style={styles.contactIconContainer}>
              <Ionicons name="mail-outline" size={24} color="#4A90E2" />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValueLink}>info@tubexdubai.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('tel:+97143976100')}
            activeOpacity={0.7}
          >
            <View style={styles.contactIconContainer}>
              <Ionicons name="call-outline" size={24} color="#4A90E2" />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValueLink}>+971 4 397 6100</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <View style={styles.contactIconContainer}>
              <Ionicons name="time-outline" size={24} color="#4A90E2" />
            </View>
            <View style={styles.contactTextContainer}>
              <Text style={styles.contactLabel}>Business Hours</Text>
              <Text style={styles.contactValue}>
                Monday - Friday: 09:00 AM – 05:00 PM{'\n'}
                Saturday - Sunday: Closed
              </Text>
            </View>
          </View>

          <View style={styles.visitUsBox}>
            <Ionicons name="hand-left-outline" size={32} color="#4A90E2" />
            <Text style={styles.visitUsText}>
              Better yet, see us in person!{'\n'}
              We love our customers, so feel free to visit during normal business hours.
            </Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formSectionTitle}>Send Us a Message</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Name <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Your full name"
                placeholderTextColor="#999"
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Email <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="your.email@example.com"
                placeholderTextColor="#999"
                keyboardType="email-address"
                autoCapitalize="none"
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>
              Phone <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="call-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="+971 4 397 6100"
                placeholderTextColor="#999"
                keyboardType="phone-pad"
                value={formData.phone}
                onChangeText={(value) => handleInputChange('phone', value)}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Service Interested In</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="briefcase-outline" size={20} color="#666" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Select a service"
                placeholderTextColor="#999"
                value={formData.service}
                onChangeText={(value) => handleInputChange('service', value)}
              />
            </View>
            <Text style={styles.hint}>
              Services: {services.join(', ')}
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Message</Text>
            <View style={[styles.inputWrapper, styles.textAreaWrapper]}>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Tell us about your project requirements..."
                placeholderTextColor="#999"
                multiline
                numberOfLines={6}
                textAlignVertical="top"
                value={formData.message}
                onChangeText={(value) => handleInputChange('message', value)}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#4A90E2', '#357ABD']}
              style={styles.buttonGradient}
            >
              <Ionicons name="send-outline" size={20} color="#FFFFFF" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Submit Request</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  header: {
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15,
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#4A90E2',
    textAlign: 'center',
    fontWeight: '300',
  },
  contactInfoSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A1628',
    marginBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 25,
    alignItems: 'flex-start',
  },
  contactIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactTextContainer: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  contactValue: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  contactValueLink: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '500',
  },
  visitUsBox: {
    backgroundColor: '#F0F7FF',
    borderRadius: 12,
    padding: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  visitUsText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  formContainer: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  formSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A1628',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  required: {
    color: '#FF6B6B',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 15,
    minHeight: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 12,
  },
  textAreaWrapper: {
    alignItems: 'flex-start',
    paddingVertical: 15,
    minHeight: 150,
  },
  textArea: {
    minHeight: 120,
  },
  hint: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    fontStyle: 'italic',
  },
  submitButton: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
    shadowColor: '#4A90E2',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonGradient: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

