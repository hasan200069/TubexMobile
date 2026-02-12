import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const aboutSections = [
  {
    icon: 'business',
    title: 'Company Overview',
    content: 'Premier IT services company in Dubai, delivering cutting-edge technology solutions that empower businesses to thrive in the digital age.',
  },
  {
    icon: 'flag',
    title: 'Our Mission',
    content: 'Bridge the gap between business challenges and technological solutions. We strive to be the trusted technology partner for businesses across the Middle East.',
  },
  {
    icon: 'star',
    title: 'What Sets Us Apart',
    content: 'Deep expertise in modern technologies • Client-centric approach • Commitment to quality • Strong Dubai market presence • Comprehensive support services',
  },
  {
    icon: 'location',
    title: 'Dubai-Based Excellence',
    content: 'Unique insights into regional market dynamics, business culture, and regulatory environment. We understand the specific needs of Middle East businesses.',
  },
];

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.headerTitle}>About Tubex Dubai</Text>
          <Text style={styles.headerSubtitle}>Innovation • Excellence • Trust</Text>
        </View>

        {/* About Sections */}
        <View style={styles.content}>
          {aboutSections.map((section, index) => (
            <View key={index} style={styles.sectionCard}>
              <View style={styles.sectionHeader}>
                <View style={styles.sectionIconContainer}>
                  <Ionicons name={section.icon} size={24} color="#4A90E2" />
                </View>
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              <Text style={styles.sectionText}>{section.content}</Text>
            </View>
          ))}

          {/* CTA Card */}
          <View style={styles.ctaCard}>
            <Ionicons name="rocket" size={32} color="#4A90E2" />
            <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
            <Text style={styles.ctaText}>
              Let's discuss how we can help transform your business with our IT solutions.
            </Text>
          </View>
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
    paddingBottom: 24,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A3E',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
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
  content: {
    padding: 16,
  },
  sectionCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2A2A3E',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A90E220',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  sectionText: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
  },
  ctaCard: {
    backgroundColor: '#1A1A2E',
    borderRadius: 12,
    padding: 24,
    marginTop: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 8,
  },
  ctaText: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 20,
  },
});
