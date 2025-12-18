import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={['#0A1628', '#1A1A2E']}
        style={styles.heroSection}
      >
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Tubex Dubai</Text>
        <Text style={styles.tagline}>
          Transforming Businesses with Cutting-Edge IT Solutions
        </Text>
      </LinearGradient>

      <View style={styles.contentSection}>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionTitle}>Welcome to Tubex Dubai</Text>
          <Text style={styles.description}>
            We are a leading IT services company based in Dubai, dedicated to
            providing innovative technology solutions that drive business growth
            and digital transformation. Our expertise spans across mobile app
            development, web solutions, AI automation, blockchain technologies,
            and cloud infrastructure.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('Services')}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={['#4A90E2', '#357ABD']}
              style={styles.buttonGradient}
            >
              <Text style={styles.buttonText}>Our Services</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate('Contact')}
            activeOpacity={0.8}
          >
            <Text style={styles.secondaryButtonText}>Contact Us</Text>
          </TouchableOpacity>
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
  heroSection: {
    width: '100%',
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 18,
    color: '#4A90E2',
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 20,
  },
  contentSection: {
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
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0A1628',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  buttonContainer: {
    gap: 15,
  },
  primaryButton: {
    borderRadius: 12,
    overflow: 'hidden',
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
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#4A90E2',
  },
  secondaryButtonText: {
    color: '#4A90E2',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

