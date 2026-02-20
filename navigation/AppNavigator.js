import React from 'react';
import { Platform, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ServiceDetailScreen from '../screens/ServiceDetailScreen';
import ContactScreen from '../screens/ContactScreen';
import AboutScreen from '../screens/AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ServicesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#0A1628' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="ServicesList" component={ServicesScreen} />
      <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            Services: focused ? 'grid' : 'grid-outline',
            Contact: focused ? 'mail' : 'mail-outline',
            About: focused ? 'information-circle' : 'information-circle-outline',
          };
          return <Ionicons name={icons[route.name]} size={focused ? size + 1 : size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#3A4A5E',
        tabBarStyle: {
          backgroundColor: '#0D1B2A',
          borderTopColor: '#1A2A3E',
          borderTopWidth: 1,
          height: Platform.OS === 'ios' ? 84 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 10,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
          letterSpacing: 0.2,
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Services" component={ServicesStack} options={{ tabBarLabel: 'Services' }} />
      <Tab.Screen name="Contact" component={ContactScreen} options={{ tabBarLabel: 'Contact' }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ tabBarLabel: 'About' }} />
    </Tab.Navigator>
  );
}
