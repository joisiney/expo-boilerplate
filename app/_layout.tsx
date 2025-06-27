import {useEffect} from 'react';
import {
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
    useFonts
} from '@expo-google-fonts/quicksand';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import '@/core/config/nativewind';
import {LinguiProvider} from '@/core/config/lingui/provider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_700Bold
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <LinguiProvider>
            <Stack>
                <Stack.Screen name="/" options={{headerShown: false}} />
                <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
        </LinguiProvider>
    );
}
