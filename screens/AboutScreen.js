import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#0A1628', '#1A1A2E']}
        style={styles.header}
      >
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerTitle}>About Tubex Dubai</Text>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.iconBox}>
            <Ionicons name="business-outline" size={32} color="#4A90E2" />
          </View>
          <Text style={styles.sectionTitle}>Company Overview</Text>
          <Text style={styles.sectionText}>
            Tubex Dubai is a premier IT services company headquartered in the
            vibrant business hub of Dubai. We specialize in delivering
            cutting-edge technology solutions that empower businesses to thrive
            in the digital age. With a team of experienced professionals and a
            passion for innovation, we help companies transform their operations,
            enhance customer experiences, and achieve sustainable growth.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.iconBox}>
            <Ionicons name="flag-outline" size={32} color="#4A90E2" />
          </View>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.sectionText}>
            Our mission is to bridge the gap between business challenges and
            technological solutions. We strive to be the trusted technology
            partner for businesses across the Middle East, delivering solutions
            that are not only innovative but also practical, scalable, and
            aligned with our clients' strategic objectives.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.iconBox}>
            <Ionicons name="star-outline" size={32} color="#4A90E2" />
          </View>
          <Text style={styles.sectionTitle}>What Sets Us Apart</Text>
          <Text style={styles.sectionText}>
            • Deep expertise in modern technologies and frameworks{'\n'}
            • Client-centric approach with personalized solutions{'\n'}
            • Commitment to quality and timely delivery{'\n'}
            • Strong presence in the Dubai market{'\n'}
            • Comprehensive support and maintenance services{'\n'}
            • Continuous innovation and learning culture
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.iconBox}>
            <Ionicons name="location-outline" size={32} color="#4A90E2" />
          </View>
          <Text style={styles.sectionTitle}>Dubai-Based Excellence</Text>
          <Text style={styles.sectionText}>
            Being based in Dubai gives us unique insights into the regional
            market dynamics, business culture, and regulatory environment. We
            understand the specific needs of businesses operating in the Middle
            East and tailor our solutions accordingly. Our strategic location
            also enables us to serve clients across the region efficiently.
          </Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.contactTitle}>Ready to Get Started?</Text>
          <Text style={styles.contactText}>
            Let's discuss how we can help transform your business with our IT
            solutions.
          </Text>
        </View>
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
    padding: 40,
    paddingTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  iconBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A1628',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  contactBox: {
    backgroundColor: '#0A1628',
    borderRadius: 15,
    padding: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#4A90E2',
    textAlign: 'center',
    lineHeight: 24,
  },
});

