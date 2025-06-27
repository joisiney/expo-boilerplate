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
import {ThemeProvider, useTheme} from '@/core/config/theme';

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
    const {effectiveTheme} = useTheme();
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

    const isDark = effectiveTheme === 'dark';

    return (
        <>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF'
                    },
                    headerTintColor: isDark ? '#FFFFFF' : '#212121',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: isDark ? '#FFFFFF' : '#212121'
                    }
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: true,
                        title: 'Home'
                    }}
                />
                <Stack.Screen
                    name="+not-found"
                    options={{
                        title: 'Página não encontrada',
                        headerStyle: {
                            backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF'
                        },
                        headerTintColor: isDark ? '#FFFFFF' : '#212121'
                    }}
                />
            </Stack>
            <StatusBar
                style={isDark ? 'light' : 'dark'}
                backgroundColor={isDark ? '#121212' : '#FFFFFF'}
            />
        </>
    );
}

export default function RootLayout() {
    return (
        <ThemeProvider>
            <LinguiProvider>
                <RootLayoutContent />
            </LinguiProvider>
        </ThemeProvider>
    );
}
