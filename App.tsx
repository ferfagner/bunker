import React from 'react';
import {useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";


import {ThemeProvider} from 'styled-components'
import theme from './src/styles/theme';
import { Routes } from './src/routes';
import { AppProvider } from './src/hooks';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
    

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
    <Routes/>
    </AppProvider>
    </ThemeProvider>
   
  );
}

