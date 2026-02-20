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
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const services = [
  { icon: 'phone-portrait', label: 'Mobile Apps', color: '#4A90E2', bg: '#4A90E215' },
  { icon: 'globe', label: 'Web Dev', color: '#50C878', bg: '#50C87815' },
  { icon: 'flash', label: 'AI & Automation', color: '#FF6B6B', bg: '#FF6B6B15' },
  { icon: 'cube', label: 'Blockchain', color: '#9B59B6', bg: '#9B59B615' },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '8+', label: 'Years Experience' },
  { value: '40+', label: 'Expert Team' },
];

const testimonials = [
  {
    name: 'Ahmed Al Rashid',
    role: 'CEO, AlFardan Group',
    text: 'Tubex transformed our entire digital infrastructure. Exceptional quality and professionalism.',
    initials: 'AA',
    color: '#4A90E2',
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO, Emirates Tech',
    text: 'The AI automation solution they built saved us 60% in operational costs. Truly world-class.',
    initials: 'SJ',
    color: '#50C878',
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* ── HERO ── */}
        <LinearGradient
          colors={['#0A1628', '#0D1F3C', '#0A1628']}
          style={styles.hero}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Decorative circles */}
          <View style={[styles.deco, styles.decoTop]} />
          <View style={[styles.deco, styles.decoBottom]} />

          {/* Header row */}
          <View style={styles.headerRow}>
            <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
            <View style={styles.headerMeta}>
              <Text style={styles.brandName}>Tubex Dubai</Text>
              <View style={styles.verifiedBadge}>
                <Ionicons name="shield-checkmark" size={11} color="#50C878" />
                <Text style={styles.verifiedText}>Verified Partner</Text>
              </View>
            </View>
          </View>

          {/* Hero copy */}
          <View style={styles.heroCopy}>
            <View style={styles.pillTag}>
              <View style={styles.pillDot} />
              <Text style={styles.pillTagText}>Dubai's Leading IT Company</Text>
            </View>
            <Text style={styles.heroTitle}>Innovate.{'\n'}Transform.{'\n'}Succeed.</Text>
            <Text style={styles.heroSubtitle}>
              Cutting-edge technology solutions that propel your business into the digital future.
            </Text>
          </View>

          {/* CTA buttons */}
          <View style={styles.heroButtons}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => navigation.navigate('Services')}
            >
              <LinearGradient
                colors={['#4A90E2', '#2C6FC7']}
                style={styles.heroPrimaryBtn}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.heroPrimaryBtnText}>Our Services</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.heroGhostBtn}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Contact')}
            >
              <Text style={styles.heroGhostBtnText}>Get a Quote</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* ── STATS ── */}
        <View style={styles.statsStrip}>
          {stats.map((s, i) => (
            <View key={i} style={[styles.statItem, i < stats.length - 1 && styles.statDivider]}>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        {/* ── SERVICES ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionEyebrow}>What We Do</Text>
              <Text style={styles.sectionTitle}>Our Expertise</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Services')} style={styles.seeAllBtn}>
              <Text style={styles.seeAllText}>See all</Text>
              <Ionicons name="arrow-forward" size={14} color="#4A90E2" />
            </TouchableOpacity>
          </View>

          <View style={styles.servicesGrid}>
            {services.map((s, i) => (
              <TouchableOpacity
                key={i}
                style={styles.serviceCard}
                onPress={() => navigation.navigate('Services')}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={['#1A2A3E', '#111C2E']}
                  style={styles.serviceCardInner}
                >
                  <View style={[styles.serviceIconBox, { backgroundColor: s.bg }]}>
                    <Ionicons name={s.icon} size={26} color={s.color} />
                  </View>
                  <Text style={styles.serviceCardLabel}>{s.label}</Text>
                  <Ionicons name="arrow-forward-circle" size={18} color="#3A4A5E" style={{ marginTop: 8 }} />
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* ── WHY US ── */}
        <View style={styles.whyUsSection}>
          <LinearGradient
            colors={['#0F2035', '#091525']}
            style={styles.whyUsGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.glowAccent} />
            <Text style={styles.sectionEyebrow}>Why Choose Us</Text>
            <Text style={styles.whyUsTitle}>The Tubex Advantage</Text>

            {[
              { icon: 'checkmark-circle', color: '#50C878', text: 'End-to-end solutions from strategy to delivery' },
              { icon: 'people', color: '#4A90E2', text: 'Expert team of 40+ engineers & designers' },
              { icon: 'shield-checkmark', color: '#9B59B6', text: 'ISO-certified processes & enterprise security' },
              { icon: 'time', color: '#F39C12', text: 'On-time delivery with transparent communication' },
            ].map((item, i) => (
              <View key={i} style={styles.whyUsItem}>
                <View style={[styles.whyUsIconBox, { backgroundColor: item.color + '20' }]}>
                  <Ionicons name={item.icon} size={20} color={item.color} />
                </View>
                <Text style={styles.whyUsText}>{item.text}</Text>
              </View>
            ))}

            <TouchableOpacity
              style={styles.whyUsCTA}
              onPress={() => navigation.navigate('About')}
              activeOpacity={0.8}
            >
              <Text style={styles.whyUsCTAText}>Learn More About Us</Text>
              <Ionicons name="chevron-forward" size={16} color="#4A90E2" />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        {/* ── TESTIMONIALS ── */}
        <View style={styles.section}>
          <Text style={styles.sectionEyebrow}>Client Stories</Text>
          <Text style={styles.sectionTitle}>What Our Clients Say</Text>

          {testimonials.map((t, i) => (
            <View key={i} style={styles.testimonialCard}>
              <LinearGradient colors={['#1A2A3E', '#111C2E']} style={styles.testimonialInner}>
                <View style={styles.quoteIcon}>
                  <Ionicons name="chatbubble-ellipses" size={20} color="#4A90E2" />
                </View>
                <Text style={styles.testimonialText}>"{t.text}"</Text>
                <View style={styles.testimonialAuthor}>
                  <View style={[styles.testimonialAvatar, { backgroundColor: t.color + '25' }]}>
                    <Text style={[styles.testimonialInitials, { color: t.color }]}>{t.initials}</Text>
                  </View>
                  <View>
                    <Text style={styles.testimonialName}>{t.name}</Text>
                    <Text style={styles.testimonialRole}>{t.role}</Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          ))}
        </View>

        {/* ── CTA BANNER ── */}
        <View style={styles.ctaBanner}>
          <LinearGradient
            colors={['#1A3D6B', '#0D2444']}
            style={styles.ctaBannerInner}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.ctaBannerTitle}>Ready to start your project?</Text>
            <Text style={styles.ctaBannerSub}>Let's build something extraordinary together.</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Contact')}
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={['#4A90E2', '#2C6FC7']}
                style={styles.ctaBannerBtn}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Ionicons name="mail" size={18} color="#fff" />
                <Text style={styles.ctaBannerBtnText}>Contact Us Today</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={{ height: 24 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0A1628' },
  container: { flex: 1, backgroundColor: '#0A1628' },

  // Hero
  hero: { paddingHorizontal: 24, paddingTop: 20, paddingBottom: 36, overflow: 'hidden' },
  deco: { position: 'absolute', borderRadius: 999, opacity: 0.07 },
  decoTop: { width: 280, height: 280, backgroundColor: '#4A90E2', top: -80, right: -60 },
  decoBottom: { width: 200, height: 200, backgroundColor: '#50C878', bottom: -40, left: -40 },

  headerRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 32, gap: 12 },
  logo: { width: 52, height: 52 },
  headerMeta: { gap: 4 },
  brandName: { fontSize: 20, fontWeight: '800', color: '#FFFFFF', letterSpacing: -0.3 },
  verifiedBadge: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  verifiedText: { fontSize: 11, color: '#50C878', fontWeight: '600' },

  heroCopy: { marginBottom: 28 },
  pillTag: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 16, alignSelf: 'flex-start', backgroundColor: '#4A90E215', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, borderWidth: 1, borderColor: '#4A90E230' },
  pillDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#4A90E2' },
  pillTagText: { fontSize: 12, color: '#4A90E2', fontWeight: '700' },
  heroTitle: { fontSize: 42, fontWeight: '900', color: '#FFFFFF', lineHeight: 50, letterSpacing: -1, marginBottom: 14 },
  heroSubtitle: { fontSize: 15, color: '#7A8FA6', lineHeight: 23, maxWidth: width * 0.85 },

  heroButtons: { flexDirection: 'row', gap: 12 },
  heroPrimaryBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 14, paddingHorizontal: 22, borderRadius: 14 },
  heroPrimaryBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  heroGhostBtn: { borderWidth: 1.5, borderColor: '#2A3A5A', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 22, justifyContent: 'center' },
  heroGhostBtnText: { color: '#B0C4DE', fontWeight: '600', fontSize: 15 },

  // Stats
  statsStrip: { flexDirection: 'row', backgroundColor: '#111C2E', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#1E2A3E' },
  statItem: { flex: 1, alignItems: 'center', paddingVertical: 18 },
  statDivider: { borderRightWidth: 1, borderRightColor: '#1E2A3E' },
  statValue: { fontSize: 20, fontWeight: '900', color: '#4A90E2', letterSpacing: -0.5 },
  statLabel: { fontSize: 10, color: '#6B7A99', marginTop: 3, textAlign: 'center' },

  // Section
  section: { paddingHorizontal: 20, marginTop: 32 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18 },
  sectionEyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 },
  sectionTitle: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', letterSpacing: -0.4, marginBottom: 18 },
  seeAllBtn: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  seeAllText: { fontSize: 13, color: '#4A90E2', fontWeight: '600' },

  // Services Grid
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  serviceCard: { width: (width - 52) / 2, borderRadius: 18, overflow: 'hidden' },
  serviceCardInner: { padding: 18, borderRadius: 18, borderWidth: 1, borderColor: '#1E2A3E' },
  serviceIconBox: { width: 50, height: 50, borderRadius: 14, justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
  serviceCardLabel: { fontSize: 14, fontWeight: '700', color: '#FFFFFF', lineHeight: 19 },

  // Why Us
  whyUsSection: { marginTop: 32, marginHorizontal: 20, borderRadius: 22, overflow: 'hidden' },
  whyUsGradient: { padding: 24, borderRadius: 22, borderWidth: 1, borderColor: '#1E2A3E', overflow: 'hidden' },
  glowAccent: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#4A90E2', opacity: 0.04, top: -60, right: -40 },
  whyUsTitle: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', marginBottom: 20, letterSpacing: -0.4 },
  whyUsItem: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 14 },
  whyUsIconBox: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  whyUsText: { fontSize: 14, color: '#B0C4DE', flex: 1, lineHeight: 20 },
  whyUsCTA: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 8 },
  whyUsCTAText: { fontSize: 15, color: '#4A90E2', fontWeight: '700' },

  // Testimonials
  testimonialCard: { marginBottom: 14, borderRadius: 18, overflow: 'hidden' },
  testimonialInner: { padding: 20, borderRadius: 18, borderWidth: 1, borderColor: '#1E2A3E' },
  quoteIcon: { marginBottom: 12 },
  testimonialText: { fontSize: 14, color: '#B0C4DE', lineHeight: 22, marginBottom: 16, fontStyle: 'italic' },
  testimonialAuthor: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  testimonialAvatar: { width: 42, height: 42, borderRadius: 21, justifyContent: 'center', alignItems: 'center' },
  testimonialInitials: { fontSize: 14, fontWeight: '800' },
  testimonialName: { fontSize: 14, fontWeight: '700', color: '#FFFFFF' },
  testimonialRole: { fontSize: 12, color: '#6B7A99', marginTop: 2 },

  // CTA Banner
  ctaBanner: { marginHorizontal: 20, marginTop: 32, borderRadius: 22, overflow: 'hidden' },
  ctaBannerInner: { padding: 28, borderRadius: 22, borderWidth: 1, borderColor: '#2A3A5A', alignItems: 'center' },
  ctaBannerTitle: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', textAlign: 'center', marginBottom: 8 },
  ctaBannerSub: { fontSize: 14, color: '#7A8FA6', textAlign: 'center', marginBottom: 22 },
  ctaBannerBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 14, paddingHorizontal: 28, borderRadius: 14 },
  ctaBannerBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
