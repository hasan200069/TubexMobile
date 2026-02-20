import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
    Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import notificationService from '../services/notificationService';

const services = [
    'Mobile App Development',
    'Web Development',
    'AI Automation',
    'Blockchain Solutions',
    'Cloud & DevOps',
    'Other',
];

const contactMethods = [
    {
        icon: 'location',
        label: 'Office',
        value: 'Office No 15-17-19, M Floor\nAl Manazel Building, Al Garhoud\nDubai, UAE',
        color: '#4A90E2',
        action: null,
    },
    {
        icon: 'mail',
        label: 'Email',
        value: 'info@tubexdubai.com',
        color: '#50C878',
        action: () => Linking.openURL('mailto:info@tubexdubai.com'),
    },
    {
        icon: 'logo-whatsapp',
        label: 'WhatsApp',
        value: '+971 4 397 6100',
        color: '#25D366',
        action: () => Linking.openURL('https://wa.me/97143976100'),
    },
    {
        icon: 'time',
        label: 'Hours',
        value: 'Mon–Fri: 9:00 AM – 5:00 PM\nWeekends: Closed',
        color: '#F39C12',
        action: null,
    },
];

export default function ContactScreen() {
    const route = useRoute();
    const preselectedService = route.params?.serviceName || '';
    const [focused, setFocused] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: preselectedService,
        message: '',
    });

    const handleInput = (field, value) => setFormData((p) => ({ ...p, [field]: value }));

    const handleSubmit = async () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
            Alert.alert('Missing Fields', 'Please fill in your name, email and phone number.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }
        try { await notificationService.sendFormSubmissionNotification(formData); } catch (_) { }

        Alert.alert(
            '✅ Message Sent!',
            'Thank you for reaching out to Tubex Dubai. Our team will contact you within 24 hours.',
            [{ text: 'Done', onPress: () => setFormData({ name: '', email: '', phone: '', service: '', message: '' }) }]
        );
    };

    const inputStyle = (field) => [
        styles.inputContainer,
        focused === field && styles.inputFocused,
    ];

    return (
        <SafeAreaView style={styles.safeArea} edges={['top']}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    {/* Header */}
                    <LinearGradient
                        colors={['#0D1F3C', '#0A1628']}
                        style={styles.header}
                    >
                        <View style={styles.headerDeco} />
                        <Text style={styles.eyebrow}>Let's Talk</Text>
                        <Text style={styles.headerTitle}>Contact Us</Text>
                        <Text style={styles.headerSub}>
                            Ready to start your next project? We'd love to hear from you.
                        </Text>
                    </LinearGradient>

                    {/* Contact Methods */}
                    <View style={styles.contactGrid}>
                        {contactMethods.map((m, i) => (
                            <TouchableOpacity
                                key={i}
                                style={styles.contactCard}
                                onPress={m.action}
                                activeOpacity={m.action ? 0.75 : 1}
                                disabled={!m.action}
                            >
                                <LinearGradient colors={['#1A2A3E', '#111C2E']} style={styles.contactCardInner}>
                                    <View style={[styles.contactIconBox, { backgroundColor: m.color + '20' }]}>
                                        <Ionicons name={m.icon} size={20} color={m.color} />
                                    </View>
                                    <Text style={[styles.contactLabel, { color: m.color }]}>{m.label}</Text>
                                    <Text style={styles.contactValue}>{m.value}</Text>
                                    {m.action && (
                                        <View style={styles.tapHint}>
                                            <Text style={[styles.tapHintText, { color: m.color }]}>Tap to open →</Text>
                                        </View>
                                    )}
                                </LinearGradient>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Form */}
                    <View style={styles.formSection}>
                        <Text style={styles.formEyebrow}>Send a Message</Text>
                        <Text style={styles.formTitle}>Tell us about your project</Text>

                        {/* Name */}
                        <View style={inputStyle('name')}>
                            <Ionicons name="person-outline" size={18} color={focused === 'name' ? '#4A90E2' : '#4A5568'} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name *"
                                placeholderTextColor="#4A5568"
                                value={formData.name}
                                onChangeText={(v) => handleInput('name', v)}
                                onFocus={() => setFocused('name')}
                                onBlur={() => setFocused('')}
                            />
                        </View>

                        {/* Email */}
                        <View style={inputStyle('email')}>
                            <Ionicons name="mail-outline" size={18} color={focused === 'email' ? '#4A90E2' : '#4A5568'} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Email Address *"
                                placeholderTextColor="#4A5568"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={formData.email}
                                onChangeText={(v) => handleInput('email', v)}
                                onFocus={() => setFocused('email')}
                                onBlur={() => setFocused('')}
                            />
                        </View>

                        {/* Phone */}
                        <View style={inputStyle('phone')}>
                            <Ionicons name="call-outline" size={18} color={focused === 'phone' ? '#4A90E2' : '#4A5568'} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number *"
                                placeholderTextColor="#4A5568"
                                keyboardType="phone-pad"
                                value={formData.phone}
                                onChangeText={(v) => handleInput('phone', v)}
                                onFocus={() => setFocused('phone')}
                                onBlur={() => setFocused('')}
                            />
                        </View>

                        {/* Service */}
                        <View style={inputStyle('service')}>
                            <Ionicons name="briefcase-outline" size={18} color={focused === 'service' ? '#4A90E2' : '#4A5568'} style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Service Interested In"
                                placeholderTextColor="#4A5568"
                                value={formData.service}
                                onChangeText={(v) => handleInput('service', v)}
                                onFocus={() => setFocused('service')}
                                onBlur={() => setFocused('')}
                            />
                        </View>

                        {/* Service chips */}
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll} contentContainerStyle={{ gap: 8 }}>
                            {services.map((s) => (
                                <TouchableOpacity
                                    key={s}
                                    style={[styles.chip, formData.service === s && styles.chipActive]}
                                    onPress={() => handleInput('service', s)}
                                >
                                    <Text style={[styles.chipText, formData.service === s && styles.chipTextActive]}>{s}</Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {/* Message */}
                        <View style={[inputStyle('message'), styles.textAreaContainer]}>
                            <Ionicons name="chatbubble-outline" size={18} color={focused === 'message' ? '#4A90E2' : '#4A5568'} style={styles.inputIconTop} />
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Tell us about your project..."
                                placeholderTextColor="#4A5568"
                                multiline
                                numberOfLines={5}
                                textAlignVertical="top"
                                value={formData.message}
                                onChangeText={(v) => handleInput('message', v)}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused('')}
                            />
                        </View>

                        {/* Submit */}
                        <TouchableOpacity onPress={handleSubmit} activeOpacity={0.85} style={styles.submitWrapper}>
                            <LinearGradient
                                colors={['#4A90E2', '#2C6FC7']}
                                style={styles.submitBtn}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Ionicons name="send" size={18} color="#FFFFFF" />
                                <Text style={styles.submitText}>Send Message</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 24 }} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#0A1628' },
    container: { flex: 1, backgroundColor: '#0A1628' },

    // Header
    header: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 28, overflow: 'hidden' },
    headerDeco: { position: 'absolute', width: 200, height: 200, borderRadius: 100, backgroundColor: '#4A90E2', opacity: 0.05, top: -60, right: -40 },
    eyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 6 },
    headerTitle: { fontSize: 34, fontWeight: '900', color: '#FFFFFF', letterSpacing: -1, marginBottom: 10 },
    headerSub: { fontSize: 14, color: '#7A8FA6', lineHeight: 21 },

    // Contact Grid
    contactGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 16, gap: 10 },
    contactCard: { width: '47.5%', borderRadius: 16, overflow: 'hidden' },
    contactCardInner: { padding: 16, borderRadius: 16, borderWidth: 1, borderColor: '#1E2A3E', minHeight: 100 },
    contactIconBox: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
    contactLabel: { fontSize: 11, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 4 },
    contactValue: { fontSize: 12, color: '#B0C4DE', lineHeight: 18 },
    tapHint: { marginTop: 8 },
    tapHintText: { fontSize: 11, fontWeight: '600' },

    // Form
    formSection: { paddingHorizontal: 20, paddingTop: 8 },
    formEyebrow: { fontSize: 12, color: '#4A90E2', fontWeight: '700', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 4 },
    formTitle: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', letterSpacing: -0.4, marginBottom: 20 },

    inputContainer: {
        flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#111C2E', borderRadius: 14,
        borderWidth: 1.5, borderColor: '#1E2A3E',
        paddingHorizontal: 14, minHeight: 54, marginBottom: 12,
    },
    inputFocused: { borderColor: '#4A90E2', backgroundColor: '#0F1F35' },
    inputIcon: { marginRight: 10 },
    inputIconTop: { marginRight: 10, marginTop: 4, alignSelf: 'flex-start' },
    input: { flex: 1, fontSize: 15, color: '#FFFFFF', paddingVertical: 14 },

    textAreaContainer: { alignItems: 'flex-start', paddingTop: 14, minHeight: 130 },
    textArea: { minHeight: 100 },

    // Chips
    chipScroll: { marginBottom: 14 },
    chip: { paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20, backgroundColor: '#111C2E', borderWidth: 1.5, borderColor: '#1E2A3E' },
    chipActive: { backgroundColor: '#4A90E225', borderColor: '#4A90E2' },
    chipText: { fontSize: 12, color: '#6B7A99', fontWeight: '600' },
    chipTextActive: { color: '#4A90E2' },

    // Submit
    submitWrapper: { borderRadius: 16, overflow: 'hidden', marginTop: 8 },
    submitBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, paddingVertical: 16, borderRadius: 16 },
    submitText: { color: '#FFFFFF', fontWeight: '700', fontSize: 16 },
});
