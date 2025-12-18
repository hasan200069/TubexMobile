import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const cardWidth = width - 40;

const services = [
  {
    id: 1,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: 'phone-portrait-outline',
    color: ['#4A90E2', '#357ABD'],
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Responsive web applications and modern websites built with latest technologies',
    icon: 'globe-outline',
    color: ['#50C878', '#45B369'],
  },
  {
    id: 3,
    title: 'AI Automation',
    description: 'Intelligent automation solutions powered by artificial intelligence',
    icon: 'flash-outline',
    color: ['#FF6B6B', '#EE5A6F'],
  },
  {
    id: 4,
    title: 'Blockchain Solutions',
    description: 'Decentralized applications and blockchain-based solutions',
    icon: 'cube-outline',
    color: ['#9B59B6', '#8E44AD'],
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure setup, migration, and DevOps automation',
    icon: 'cloud-outline',
    color: ['#F39C12', '#E67E22'],
  },
];

export default function ServicesScreen() {
  const navigation = useNavigation();

  const handleServicePress = (service) => {
    navigation.navigate('ServiceDetail', { service });
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>
          Comprehensive IT solutions tailored to your business needs
        </Text>
      </View>

      <View style={styles.servicesContainer}>
        {services.map((service) => (
          <TouchableOpacity
            key={service.id}
            style={styles.serviceCard}
            onPress={() => handleServicePress(service)}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={service.color}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={service.icon} size={48} color="#FFFFFF" />
              </View>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardDescription}>{service.description}</Text>
              <View style={styles.arrowContainer}>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#0A1628',
    padding: 30,
    paddingTop: 60,
    paddingBottom: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '300',
  },
  servicesContainer: {
    padding: 20,
    gap: 20,
  },
  serviceCard: {
    borderRadius: 20,
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
  cardGradient: {
    padding: 25,
    minHeight: 200,
  },
  iconContainer: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 22,
    marginBottom: 15,
  },
  arrowContainer: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
  },
});

