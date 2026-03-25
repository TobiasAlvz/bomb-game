import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useCallback, useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import theme from "../global/styles/theme";

// evita splash sumir antes da hora
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="light" />

      <ThemeProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </View>
  );
}