import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/SplashScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate splash screen delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

