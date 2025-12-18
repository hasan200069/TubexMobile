import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
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
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={service.color || ['#4A90E2', '#357ABD']}
        style={styles.header}
      >
        <View style={styles.iconContainer}>
          <Ionicons name={service.icon} size={64} color="#FFFFFF" />
        </View>
        <Text style={styles.title}>{service.title}</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{details.fullDescription}</Text>
        </View>

        <TouchableOpacity
          style={styles.requestButton}
          onPress={handleRequestService}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={service.color || ['#4A90E2', '#357ABD']}
            style={styles.buttonGradient}
          >
            <Ionicons name="mail-outline" size={20} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Request This Service</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
  },
  header: {
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  descriptionBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 26,
  },
  requestButton: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
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

