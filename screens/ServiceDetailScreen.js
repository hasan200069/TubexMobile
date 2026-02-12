import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const serviceDetails = {
  'Mobile App Development': {
    fullDescription: `We specialize in developing high-performance mobile applications for both iOS and Android platforms. Our team leverages native and cross-platform frameworks to deliver seamless user experiences.

Our mobile app development services include:
• Native iOS and Android development
• Cross-platform solutions using React Native and Flutter
• UI/UX design and optimization
• App store deployment and management
• Post-launch support and maintenance
• Performance optimization and analytics integration

Whether you need a consumer-facing app, enterprise solution, or e-commerce platform, we have the expertise to bring your vision to life.`,
  },
  'Web Development': {
    fullDescription: `We create modern, responsive web applications that deliver exceptional user experiences across all devices. Our web solutions are built with the latest technologies and best practices.

Our web development services include:
• Custom web application development
• Frontend and backend development
• E-commerce solutions
• Content Management Systems (CMS)
• Progressive Web Apps (PWA)
• API development and integration
• Website optimization and SEO

From simple business websites to complex enterprise applications, we deliver scalable solutions that grow with your business.`,
  },
  'AI Automation': {
    fullDescription: `Transform your business operations with intelligent automation powered by artificial intelligence. We help businesses streamline processes, reduce costs, and improve efficiency.

Our AI automation services include:
• Process automation and workflow optimization
• Machine learning model development
• Chatbots and virtual assistants
• Data analysis and predictive analytics
• Natural Language Processing (NLP)
• Computer vision solutions
• AI strategy consulting

Let AI handle repetitive tasks while your team focuses on strategic initiatives that drive growth.`,
  },
  'Blockchain Solutions': {
    fullDescription: `Leverage the power of blockchain technology to build secure, transparent, and decentralized solutions. We develop blockchain applications that solve real-world business challenges.

Our blockchain services include:
• Smart contract development
• Decentralized application (DApp) development
• Cryptocurrency wallet development
• Blockchain consulting and strategy
• Tokenization solutions
• Supply chain tracking systems
• NFT marketplace development

Whether you're exploring blockchain for transparency, security, or new business models, we guide you through the entire process.`,
  },
  'Cloud & DevOps': {
    fullDescription: `Accelerate your development lifecycle and scale your infrastructure with our cloud and DevOps services. We help you build, deploy, and manage applications efficiently.

Our cloud and DevOps services include:
• Cloud infrastructure setup (AWS, Azure, GCP)
• Cloud migration and optimization
• CI/CD pipeline implementation
• Container orchestration (Docker, Kubernetes)
• Infrastructure as Code (IaC)
• Monitoring and logging solutions
• Security and compliance

Move faster, reduce costs, and improve reliability with modern cloud practices and automation.`,
  },
};

export default function ServiceDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { service } = route.params || {};

  if (!service) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle" size={48} color="#666" />
        <Text style={styles.errorText}>Service information not available</Text>
      </View>
    );
  }

  const details = serviceDetails[service.title] || {
    fullDescription: service.description || 'Detailed information coming soon.',
  };

  const handleRequestService = () => {
    Alert.alert(
      'Request Service',
      `Thank you for your interest in ${service.title}. Our team will contact you shortly.`,
      [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Contact', { serviceName: service.title }),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={[styles.iconContainer, { backgroundColor: `${service.color || '#4A90E2'}20` }]}>
            <Ionicons name={service.icon} size={40} color={service.color || '#4A90E2'} />
          </View>
          <Text style={styles.title}>{service.title}</Text>
        </View>

        {/* Content */}
        <View style={styles.content}>
          <View style={styles.descriptionCard}>
            <Text style={styles.description}>{details.fullDescription}</Text>
          </View>

          <TouchableOpacity
            style={styles.requestButton}
            onPress={handleRequestService}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={[service.color || '#4A90E2', '#357ABD']}
              style={styles.buttonGradient}
            >
              <Ionicons name="mail" size={20} color="#FFFFFF" />
              <Text style={styles.buttonText}>Request This Service</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0A1628',
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    marginTop: 16,
  },
  header: {
    backgroundColor: '#1A1A2E',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A3E',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    padding: 16,
  },
  descriptionCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2A2A3E',
  },
  description: {
    fontSize: 15,
    color: '#B0B0B0',
    lineHeight: 22,
  },
  requestButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
