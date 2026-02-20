import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const values = [
    { icon: 'bulb', color: '#F39C12', title: 'Innovation First', desc: 'We stay ahead of the technological curve so our clients always lead their industries.' },
    { icon: 'people', color: '#4A90E2', title: 'Client Centric', desc: 'Your success is our success. We build long-term partnerships founded on trust.' },
    { icon: 'shield-checkmark', color: '#50C878', title: 'Quality Assured', desc: 'ISO-certified processes and rigorous QA ensure flawless deliverables every time.' },
    { icon: 'flash', color: '#9B59B6', title: 'Agile Delivery', desc: 'Rapid, iterative delivery keeps your project on time and within budget.' },
];

const milestones = [
    { year: '2017', event: 'Founded in Dubai with 5 engineers' },
    { year: '2019', event: 'Expanded to AI & Blockchain verticals' },
    { year: '2021', event: 'Reached 100+ successful projects' },
    { year: '2023', event: 'Opened regional offices across GCC' },
    { year: '2025', event: '150+ projects & 40+ expert team members' },
];

const teamMembers = [
    { name: 'Khalid Al-Mansoori', role: 'CEO & Co-Founder', initials: 'KA', color: '#4A90E2' },
    { name: 'Priya Sharma', role: 'CTO', initials: 'PS', color: '#50C878' },
    { name: 'Omar Farooq', role: 'Head of Design', initials: 'OF', color: '#FF6B6B' },
];

export default function AboutScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Header */}
                <LinearGradient
                    colors={['#0D1F3C', '#0A1628']}
                    style={styles.header}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View style={styles.headerDeco} />
                    <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.eyebrow}>Our Story</Text>
                    <Text style={styles.headerTitle}>About Tubex Dubai</Text>
                    <Text style={styles.headerSub}>
                        Born in Dubai, built for the world. We are a premier technology company delivering innovation that drives real business outcomes.
                    </Text>
                    <View style={styles.headerBadge}>
                        <Ionicons name="location" size={13} color="#4A90E2" />
                        <Text style={styles.headerBadgeText}>Dubai, UAE · Est. 2017</Text>
                    </View>
                </LinearGradient>

                {/* Mission */}
                <View style={styles.missionSection}>
                    <LinearGradient
                        colors={['#1A2A3E', '#111C2E']}
                        style={styles.missionCard}
                    >
                        <View style={styles.missionIcon}>
                            <Ionicons name="flag" size={24} color="#4A90E2" />
                        </View>
                        <Text style={styles.missionTitle}>Our Mission</Text>
                        <Text style={styles.missionText}>
                            To bridge the gap between business challenges and transformative technology — empowering organizations across the Middle East to compete and thrive in a digital-first world.
                        </Text>
                    </LinearGradient>
                </View>

                {/* Core Values */}
                <View style={styles.section}>
                    <Text style={styles.sectionEyebrow}>What Drives Us</Text>
                    <Text style={styles.sectionTitle}>Our Core Values</Text>
                    <View style={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <View key={i} style={styles.valueCard}>
                                <LinearGradient
                                    colors={['#1A2A3E', '#111C2E']}
                                    style={styles.valueCardInner}
                                >
                                    <View style={[styles.valueIcon, { backgroundColor: v.color + '20' }]}>
                                        <Ionicons name={v.icon} size={22} color={v.color} />
                                    </View>
                                    <Text style={styles.valueTitle}>{v.title}</Text>
                                    <Text style={styles.valueDesc}>{v.desc}</Text>
                                </LinearGradient>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Timeline */}
                <View style={styles.section}>
                    <Text style={styles.sectionEyebrow}>Our Journey</Text>
                    <Text style={styles.sectionTitle}>Key Milestones</Text>
                    <View style={styles.timeline}>
                        {milestones.map((m, i) => (
                            <View key={i} style={styles.timelineItem}>
                                <View style={styles.timelineLeft}>
                                    <Text style={styles.timelineYear}>{m.year}</Text>
                                </View>
                                <View style={styles.timelineConnector}>
                                    <View style={styles.timelineDot} />
                                    {i < milestones.length - 1 && <View style={styles.timelineLine} />}
                                </View>
                                <View style={styles.timelineRight}>
                                    <Text style={styles.timelineEvent}>{m.event}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Team */}
                <View style={styles.section}>
                    <Text style={styles.sectionEyebrow}>The People</Text>
                    <Text style={styles.sectionTitle}>Leadership Team</Text>
                    <View style={styles.teamRow}>
                        {teamMembers.map((m, i) => (
                            <View key={i} style={styles.teamCard}>
                                <LinearGradient colors={['#1A2A3E', '#111C2E']} style={styles.teamCardInner}>
                                    <View style={[styles.teamAvatar, { backgroundColor: m.color + '25' }]}>
                                        <Text style={[styles.teamInitials, { color: m.color }]}>{m.initials}</Text>
                                    </View>
                                    <Text style={styles.teamName}>{m.name}</Text>
                                    <Text style={styles.teamRole}>{m.role}</Text>
                                </LinearGradient>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Location Card */}
                <View style={styles.locationSection}>
                    <LinearGradient
                        colors={['#1A2A3E', '#111C2E']}
                        style={styles.locationCard}
                    >
                        <View style={styles.locationHeader}>
                            <View style={styles.locationIconBox}>
                                <Ionicons name="location" size={22} color="#4A90E2" />
                            </View>
                            <Text style={styles.locationTitle}>Visit Our Office</Text>
                        </View>
                        <Text style={styles.locationAddress}>
                            Office No 15-17-19, Mezzanine Floor{'\n'}
                            Al Manazel Building, Al Garhoud{'\n'}
                            Dubai, United Arab Emirates
                        </Text>
                        <View style={styles.locationHours}>
                            <Ionicons name="time-outline" size={14} color="#6B7A99" />
                            <Text style={styles.locationHoursText}>Mon–Fri: 9AM – 5PM · Weekends: Closed</Text>
                        </View>
                    </LinearGradient>
                </View>

                {/* CTA */}
                <View style={styles.ctaSection}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Contact')}
                        activeOpacity={0.85}
                    >
                        <LinearGradient
                            colors={['#4A90E2', '#2C6FC7']}
                            style={styles.ctaBtn}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                        >
                            <Ionicons name="mail" size={18} color="#fff" />
                            <Text style={styles.ctaBtnText}>Get In Touch</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 24 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#0A1628' },
    container: { flex: 1, backgroundColor: '#0A1628' },

    // Header
    header: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 30, alignItems: 'center', overflow: 'hidden' },
    headerDeco: { position: 'absolute', width: 300, height: 300, borderRadius: 150, backgroundColor: '#4A90E2', opacity: 0.05, top: -100, right: -80 },
    logo: { width: 72, height: 72, marginBottom: 16 },
    eyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 },
    headerTitle: { fontSize: 32, fontWeight: '900', color: '#FFFFFF', letterSpacing: -0.8, marginBottom: 12, textAlign: 'center' },
    headerSub: { fontSize: 14, color: '#7A8FA6', lineHeight: 21, textAlign: 'center', marginBottom: 16, maxWidth: 320 },
    headerBadge: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#4A90E215', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: '#4A90E230' },
    headerBadgeText: { fontSize: 12, color: '#4A90E2', fontWeight: '600' },

    // Mission
    missionSection: { margin: 20, borderRadius: 20, overflow: 'hidden' },
    missionCard: { padding: 22, borderRadius: 20, borderWidth: 1, borderColor: '#1E2A3E', alignItems: 'flex-start' },
    missionIcon: { width: 46, height: 46, borderRadius: 14, backgroundColor: '#4A90E220', justifyContent: 'center', alignItems: 'center', marginBottom: 14 },
    missionTitle: { fontSize: 18, fontWeight: '800', color: '#FFFFFF', marginBottom: 10 },
    missionText: { fontSize: 14, color: '#B0C4DE', lineHeight: 22 },

    // Sections
    section: { paddingHorizontal: 20, marginTop: 28 },
    sectionEyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 },
    sectionTitle: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', letterSpacing: -0.4, marginBottom: 18 },

    // Values
    valuesGrid: { gap: 12 },
    valueCard: { borderRadius: 18, overflow: 'hidden' },
    valueCardInner: { padding: 18, borderRadius: 18, borderWidth: 1, borderColor: '#1E2A3E', flexDirection: 'row', alignItems: 'flex-start', gap: 14 },
    valueIcon: { width: 44, height: 44, borderRadius: 13, justifyContent: 'center', alignItems: 'center', flexShrink: 0 },
    valueTitle: { fontSize: 15, fontWeight: '800', color: '#FFFFFF', marginBottom: 4 },
    valueDesc: { fontSize: 13, color: '#7A8FA6', lineHeight: 19 },

    // Timeline
    timeline: { gap: 0 },
    timelineItem: { flexDirection: 'row', gap: 0 },
    timelineLeft: { width: 52, alignItems: 'flex-end', paddingRight: 12, paddingTop: 2 },
    timelineYear: { fontSize: 13, fontWeight: '800', color: '#4A90E2' },
    timelineConnector: { width: 20, alignItems: 'center' },
    timelineDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#4A90E2', marginTop: 4 },
    timelineLine: { width: 2, flex: 1, backgroundColor: '#1E2A3E', marginVertical: 3 },
    timelineRight: { flex: 1, paddingLeft: 12, paddingBottom: 20 },
    timelineEvent: { fontSize: 14, color: '#B0C4DE', lineHeight: 20 },

    // Team
    teamRow: { flexDirection: 'row', gap: 10 },
    teamCard: { flex: 1, borderRadius: 16, overflow: 'hidden' },
    teamCardInner: { padding: 14, borderRadius: 16, borderWidth: 1, borderColor: '#1E2A3E', alignItems: 'center' },
    teamAvatar: { width: 52, height: 52, borderRadius: 26, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
    teamInitials: { fontSize: 16, fontWeight: '800' },
    teamName: { fontSize: 12, fontWeight: '700', color: '#FFFFFF', textAlign: 'center', marginBottom: 3 },
    teamRole: { fontSize: 10, color: '#6B7A99', textAlign: 'center' },

    // Location
    locationSection: { marginHorizontal: 20, marginTop: 28, borderRadius: 18, overflow: 'hidden' },
    locationCard: { padding: 20, borderRadius: 18, borderWidth: 1, borderColor: '#1E2A3E' },
    locationHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 14 },
    locationIconBox: { width: 42, height: 42, borderRadius: 13, backgroundColor: '#4A90E220', justifyContent: 'center', alignItems: 'center' },
    locationTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF' },
    locationAddress: { fontSize: 14, color: '#B0C4DE', lineHeight: 22, marginBottom: 12 },
    locationHours: { flexDirection: 'row', alignItems: 'center', gap: 6 },
    locationHoursText: { fontSize: 12, color: '#6B7A99' },

    // CTA
    ctaSection: { margin: 20, marginTop: 28 },
    ctaBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, paddingVertical: 16, borderRadius: 16 },
    ctaBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
});
