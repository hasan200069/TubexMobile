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
    fullDescription: `We specialize in developing high-performance mobile applications for both iOS and Android platforms. Our expert team delivers seamless user experiences using the latest frameworks and design practices.`,
    bullets: [
      'Native iOS & Android development',
      'Cross-platform with React Native & Flutter',
      'UI/UX design & rapid prototyping',
      'App Store & Play Store deployment',
      'Performance optimization & analytics',
      'Post-launch support & maintenance',
    ],
  },
  'Web Development': {
    fullDescription: `We build modern, responsive web applications that scale with your business. From landing pages to complex enterprise portals, our team delivers pixel-perfect results.`,
    bullets: [
      'Custom web application development',
      'Frontend & backend engineering',
      'E-commerce & CMS platforms',
      'Progressive Web Apps (PWA)',
      'API development & integrations',
      'SEO optimization & performance tuning',
    ],
  },
  'AI Automation': {
    fullDescription: `Transform your operations with intelligent automation powered by AI. We help organizations eliminate bottlenecks, reduce costs, and make smarter decisions through data.`,
    bullets: [
      'Business process automation',
      'Machine learning model development',
      'Chatbots & virtual assistants',
      'Predictive analytics & BI dashboards',
      'Natural Language Processing (NLP)',
      'AI strategy consulting',
    ],
  },
  'Blockchain Solutions': {
    fullDescription: `We leverage blockchain technology to build secure, transparent, and decentralized solutions for real-world business challenges across multiple industries.`,
    bullets: [
      'Smart contract development & auditing',
      'Decentralized Application (DApp) development',
      'Cryptocurrency wallet integration',
      'Tokenization & NFT platforms',
      'Supply chain tracking systems',
      'Blockchain consulting & strategy',
    ],
  },
  'Cloud & DevOps': {
    fullDescription: `Accelerate delivery with modern cloud architecture and DevOps practices. We help businesses scale reliably, deploy faster, and reduce infrastructure costs.`,
    bullets: [
      'Cloud infrastructure setup (AWS, Azure, GCP)',
      'Cloud migration & cost optimization',
      'CI/CD pipeline implementation',
      'Docker & Kubernetes orchestration',
      'Infrastructure as Code (IaC)',
      'Monitoring, alerting & security compliance',
    ],
  },
};

export default function ServiceDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { service } = route.params || {};

  if (!service) {
    return (
      <View style={styles.errorContainer}>
        <Ionicons name="alert-circle-outline" size={56} color="#2A3A4E" />
        <Text style={styles.errorText}>Service information not available</Text>
      </View>
    );
  }

  const details = serviceDetails[service.title] || {
    fullDescription: service.description || 'Detailed service information coming soon.',
    bullets: [],
  };

  const handleRequest = () => {
    Alert.alert(
      '🚀 Great choice!',
      `Interested in ${service.title}? Let's discuss your requirements.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Contact Us', onPress: () => navigation.navigate('Contact', { serviceName: service.title }) },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      {/* Back Header */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn} activeOpacity={0.8}>
          <Ionicons name="arrow-back" size={20} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.topBarTitle} numberOfLines={1}>{service.title}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Hero */}
        <LinearGradient
          colors={[`${service.color || '#4A90E2'}25`, '#0A1628', '#0A1628']}
          style={styles.hero}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={styles.heroGlow} />
          <View style={[styles.heroIcon, { backgroundColor: `${service.color || '#4A90E2'}20` }]}>
            <Ionicons name={service.icon} size={48} color={service.color || '#4A90E2'} />
          </View>
          <Text style={styles.heroTitle}>{service.title}</Text>

          {/* Tags */}
          <View style={styles.tagsRow}>
            {['Professional', 'Certified', 'Enterprise-grade'].map((t, i) => (
              <View key={i} style={[styles.tag, { borderColor: `${service.color || '#4A90E2'}40` }]}>
                <Text style={[styles.tagText, { color: service.color || '#4A90E2' }]}>{t}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>Overview</Text>
          <View style={styles.overviewCard}>
            <Text style={styles.overviewText}>{details.fullDescription}</Text>
          </View>
        </View>

        {/* What's Included */}
        {details.bullets.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionEyebrow}>What's Included</Text>
            <Text style={styles.sectionTitle}>Service Scope</Text>
            <LinearGradient colors={['#1A2A3E', '#111C2E']} style={styles.bulletsCard}>
              {details.bullets.map((b, i) => (
                <View key={i} style={[styles.bulletItem, i < details.bullets.length - 1 && styles.bulletDivider]}>
                  <View style={[styles.bulletDot, { backgroundColor: service.color || '#4A90E2' }]} />
                  <Text style={styles.bulletText}>{b}</Text>
                </View>
              ))}
            </LinearGradient>
          </View>
        )}

        {/* Why Choose */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>Our Edge</Text>
          <Text style={styles.sectionTitle}>Why Tubex?</Text>
          <View style={styles.whyGrid}>
            {[
              { icon: 'ribbon', color: '#F39C12', label: 'Award-winning\nExecution' },
              { icon: 'people', color: '#4A90E2', label: '40+ Domain\nExperts' },
              { icon: 'time', color: '#50C878', label: 'On-Time\nDelivery' },
              { icon: 'headset', color: '#9B59B6', label: '24/7 Post-Launch\nSupport' },
            ].map((w, i) => (
              <View key={i} style={styles.whyCard}>
                <LinearGradient colors={['#1A2A3E', '#111C2E']} style={styles.whyCardInner}>
                  <View style={[styles.whyIcon, { backgroundColor: w.color + '20' }]}>
                    <Ionicons name={w.icon} size={22} color={w.color} />
                  </View>
                  <Text style={styles.whyLabel}>{w.label}</Text>
                </LinearGradient>
              </View>
            ))}
          </View>
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>

      {/* Sticky CTA */}
      <View style={styles.stickyBar}>
        <View>
          <Text style={styles.stickyLabel}>Interested?</Text>
          <Text style={styles.stickyTitle}>Get a Free Quote</Text>
        </View>
        <TouchableOpacity onPress={handleRequest} activeOpacity={0.85} style={styles.ctaWrapper}>
          <LinearGradient
            colors={[service.color || '#4A90E2', service.color ? service.color + 'CC' : '#2C6FC7']}
            style={styles.ctaBtn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Ionicons name="mail" size={16} color="#fff" />
            <Text style={styles.ctaBtnText}>Contact Us</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0A1628' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A1628', gap: 12 },
  errorText: { fontSize: 16, color: '#4A5568', fontWeight: '500' },

  // Top Bar
  topBar: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, backgroundColor: '#0A1628', gap: 12 },
  backBtn: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#1A2A3E', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#2A3A4E' },
  topBarTitle: { flex: 1, fontSize: 16, fontWeight: '700', color: '#FFFFFF' },

  container: { flex: 1 },

  // Hero
  hero: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 28, alignItems: 'center', overflow: 'hidden' },
  heroGlow: { position: 'absolute', width: 180, height: 180, borderRadius: 90, backgroundColor: '#4A90E2', opacity: 0.05, top: -40 },
  heroIcon: { width: 88, height: 88, borderRadius: 26, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  heroTitle: { fontSize: 26, fontWeight: '900', color: '#FFFFFF', textAlign: 'center', letterSpacing: -0.5, marginBottom: 16 },
  tagsRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  tag: { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 10, borderWidth: 1 },
  tagText: { fontSize: 11, fontWeight: '700' },

  // Sections
  section: { paddingHorizontal: 20, marginBottom: 24 },
  sectionEyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 },
  sectionTitle: { fontSize: 20, fontWeight: '800', color: '#FFFFFF', letterSpacing: -0.4, marginBottom: 14 },

  // Overview
  overviewCard: { backgroundColor: '#111C2E', borderRadius: 16, padding: 18, borderWidth: 1, borderColor: '#1E2A3E' },
  overviewText: { fontSize: 15, color: '#B0C4DE', lineHeight: 24 },

  // Bullets
  bulletsCard: { borderRadius: 18, borderWidth: 1, borderColor: '#1E2A3E', overflow: 'hidden' },
  bulletItem: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 18, paddingVertical: 14 },
  bulletDivider: { borderBottomWidth: 1, borderBottomColor: '#1E2A3E' },
  bulletDot: { width: 8, height: 8, borderRadius: 4, flexShrink: 0 },
  bulletText: { fontSize: 14, color: '#B0C4DE', flex: 1 },

  // Why Grid
  whyGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  whyCard: { width: '47%', borderRadius: 16, overflow: 'hidden' },
  whyCardInner: { padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#1E2A3E', alignItems: 'center', gap: 10 },
  whyIcon: { width: 46, height: 46, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  whyLabel: { fontSize: 12, fontWeight: '700', color: '#B0C4DE', textAlign: 'center', lineHeight: 17 },

  // Sticky CTA
  stickyBar: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: '#0D1B2A', paddingHorizontal: 20, paddingVertical: 14,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    borderTopWidth: 1, borderTopColor: '#1E2A3E',
  },
  stickyLabel: { fontSize: 11, color: '#6B7A99', marginBottom: 2 },
  stickyTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
  ctaWrapper: { borderRadius: 14, overflow: 'hidden' },
  ctaBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 13, paddingHorizontal: 20, borderRadius: 14 },
  ctaBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
