import React from 'react';
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
        headerStyle: {
          backgroundColor: '#0A1628',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="ServicesList" 
        component={ServicesScreen}
        options={{ title: 'Our Services' }}
      />
      <Stack.Screen 
        name="ServiceDetail" 
        component={ServiceDetailScreen}
        options={{ title: 'Service Details' }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Services') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'mail' : 'mail-outline';
          } else if (route.name === 'About') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: {
          backgroundColor: '#1A1A2E',
          borderTopColor: '#0A1628',
        },
        headerStyle: {
          backgroundColor: '#0A1628',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Services" 
        component={ServicesStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen 
        name="Contact" 
        component={ContactScreen}
        options={{ title: 'Contact Us' }}
      />
      <Tab.Screen 
        name="About" 
        component={AboutScreen}
        options={{ title: 'About Us' }}
      />
    </Tab.Navigator>
  );
}

