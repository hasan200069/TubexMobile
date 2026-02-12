import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const services = [
  {
    id: 1,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications',
    icon: 'phone-portrait',
    color: '#4A90E2',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Modern web applications and websites',
    icon: 'globe',
    color: '#50C878',
  },
  {
    id: 3,
    title: 'AI Automation',
    description: 'Intelligent automation solutions',
    icon: 'flash',
    color: '#FF6B6B',
  },
  {
    id: 4,
    title: 'Blockchain Solutions',
    description: 'Decentralized applications and solutions',
    icon: 'cube',
    color: '#9B59B6',
  },
  {
    id: 5,
    title: 'Cloud & DevOps',
    description: 'Cloud infrastructure and DevOps automation',
    icon: 'cloud',
    color: '#F39C12',
  },
];

export default function ServicesScreen() {
  const navigation = useNavigation();

  const handleServicePress = (service) => {
    navigation.navigate('ServiceDetail', { service });
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Our Services</Text>
          <Text style={styles.headerSubtitle}>Comprehensive IT solutions</Text>
        </View>

        <View style={styles.servicesList}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => handleServicePress(service)}
              activeOpacity={0.7}
            >
              <View style={styles.serviceCardContent}>
                <View style={[styles.serviceIconContainer, { backgroundColor: `${service.color}20` }]}>
                  <Ionicons name={service.icon} size={32} color={service.color} />
                </View>
                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text style={styles.serviceDescription}>{service.description}</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </View>
            </TouchableOpacity>
          ))}
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
  servicesList: {
    padding: 16,
  },
  serviceCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A3E',
    overflow: 'hidden',
  },
  serviceCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  serviceIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 13,
    color: '#B0B0B0',
    lineHeight: 18,
  },
});
