import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const services = [
    {
        id: 1,
        title: 'Mobile App Development',
        description: 'Native & cross-platform apps with market-leading performance.',
        icon: 'phone-portrait',
        color: '#4A90E2',
        gradient: ['#1A2E4A', '#111C2E'],
        tags: ['iOS', 'Android', 'React Native'],
    },
    {
        id: 2,
        title: 'Web Development',
        description: 'Modern, scalable web applications built for growth.',
        icon: 'globe',
        color: '#50C878',
        gradient: ['#1A3527', '#111C2E'],
        tags: ['Next.js', 'Node.js', 'AWS'],
    },
    {
        id: 3,
        title: 'AI & Automation',
        description: 'Intelligent systems that eliminate inefficiencies at scale.',
        icon: 'flash',
        color: '#FF6B6B',
        gradient: ['#3A1E1E', '#111C2E'],
        tags: ['Machine Learning', 'Chatbots', 'NLP'],
    },
    {
        id: 4,
        title: 'Blockchain Solutions',
        description: 'Secure, transparent decentralized business solutions.',
        icon: 'cube',
        color: '#9B59B6',
        gradient: ['#2A1A3E', '#111C2E'],
        tags: ['Smart Contracts', 'DApps', 'NFT'],
    },
    {
        id: 5,
        title: 'Cloud & DevOps',
        description: 'Scalable infrastructure with automated CI/CD pipelines.',
        icon: 'cloud',
        color: '#F39C12',
        gradient: ['#3A2A0E', '#111C2E'],
        tags: ['AWS', 'Docker', 'Kubernetes'],
    },
];

export default function ServicesScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Header */}
                <LinearGradient
                    colors={['#0D1F3C', '#0A1628']}
                    style={styles.header}
                >
                    <View style={styles.headerDeco} />
                    <Text style={styles.eyebrow}>What We Offer</Text>
                    <Text style={styles.headerTitle}>Our Services</Text>
                    <Text style={styles.headerSub}>
                        Enterprise-grade solutions tailored for Dubai's dynamic market.
                    </Text>
                </LinearGradient>

                {/* Service Cards */}
                <View style={styles.list}>
                    {services.map((service) => (
                        <TouchableOpacity
                            key={service.id}
                            onPress={() => navigation.navigate('ServiceDetail', { service })}
                            activeOpacity={0.85}
                            style={styles.cardWrapper}
                        >
                            <LinearGradient
                                colors={service.gradient}
                                style={styles.card}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                {/* Glow */}
                                <View style={[styles.cardGlow, { backgroundColor: service.color }]} />

                                <View style={styles.cardTop}>
                                    {/* Icon */}
                                    <View style={[styles.iconContainer, { backgroundColor: service.color + '20' }]}>
                                        <Ionicons name={service.icon} size={30} color={service.color} />
                                    </View>

                                    <View style={styles.cardInfo}>
                                        <Text style={styles.cardTitle}>{service.title}</Text>
                                        <Text style={styles.cardDescription}>{service.description}</Text>
                                    </View>

                                    <View style={[styles.arrowBox, { backgroundColor: service.color + '20' }]}>
                                        <Ionicons name="chevron-forward" size={18} color={service.color} />
                                    </View>
                                </View>

                                {/* Tags */}
                                <View style={styles.tagsRow}>
                                    {service.tags.map((tag) => (
                                        <View key={tag} style={[styles.tag, { borderColor: service.color + '40' }]}>
                                            <Text style={[styles.tagText, { color: service.color }]}>{tag}</Text>
                                        </View>
                                    ))}
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* CTA Card */}
                <View style={styles.ctaCard}>
                    <LinearGradient
                        colors={['#1A3D6B', '#0D2444']}
                        style={styles.ctaInner}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Ionicons name="rocket" size={36} color="#4A90E2" style={{ marginBottom: 12 }} />
                        <Text style={styles.ctaTitle}>Don't see what you need?</Text>
                        <Text style={styles.ctaSub}>We build custom solutions for unique business challenges.</Text>
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
                                <Text style={styles.ctaBtnText}>Discuss Your Project</Text>
                                <Ionicons name="arrow-forward" size={16} color="#fff" />
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

    // Header
    header: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 28, overflow: 'hidden' },
    headerDeco: { position: 'absolute', width: 220, height: 220, borderRadius: 110, backgroundColor: '#4A90E2', opacity: 0.05, top: -80, right: -60 },
    eyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 },
    headerTitle: { fontSize: 34, fontWeight: '900', color: '#FFFFFF', letterSpacing: -1, marginBottom: 10 },
    headerSub: { fontSize: 14, color: '#7A8FA6', lineHeight: 21 },

    // List
    list: { padding: 16, gap: 14 },
    cardWrapper: { borderRadius: 20, overflow: 'hidden' },
    card: { padding: 20, borderRadius: 20, borderWidth: 1, borderColor: '#1E2A3E', overflow: 'hidden' },
    cardGlow: { position: 'absolute', width: 120, height: 120, borderRadius: 60, opacity: 0.06, top: -30, right: -20 },
    cardTop: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 14 },
    iconContainer: { width: 56, height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
    cardInfo: { flex: 1 },
    cardTitle: { fontSize: 16, fontWeight: '800', color: '#FFFFFF', marginBottom: 4, letterSpacing: -0.2 },
    cardDescription: { fontSize: 13, color: '#7A8FA6', lineHeight: 18 },
    arrowBox: { width: 36, height: 36, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },

    // Tags
    tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    tag: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8, borderWidth: 1, backgroundColor: 'transparent' },
    tagText: { fontSize: 11, fontWeight: '700' },

    // CTA
    ctaCard: { marginHorizontal: 16, borderRadius: 22, overflow: 'hidden' },
    ctaInner: { padding: 28, borderRadius: 22, borderWidth: 1, borderColor: '#2A3A5A', alignItems: 'center' },
    ctaTitle: { fontSize: 20, fontWeight: '800', color: '#FFFFFF', textAlign: 'center', marginBottom: 8 },
    ctaSub: { fontSize: 14, color: '#7A8FA6', textAlign: 'center', marginBottom: 22 },
    ctaBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 14, paddingHorizontal: 24, borderRadius: 14 },
    ctaBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
});
