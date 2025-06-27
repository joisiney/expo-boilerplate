import {
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_700Bold,
  useFonts,
} from '@expo-google-fonts/quicksand';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = [
    { fontFamily: 'Quicksand_400Regular' },
    (Text as any).defaultProps.style,
  ];

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
