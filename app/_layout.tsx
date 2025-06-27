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
import {useNavigationStyles} from '@/core/config/nativewind/navigation-styles';
import {ThemeProvider} from '@/core/config/theme';

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
    const navigationStyles = useNavigationStyles();
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
        <>
            <Stack
                screenOptions={{
                    headerStyle: navigationStyles.headerStyle,
                    headerTintColor: navigationStyles.headerTintColor,
                    headerTitleStyle: navigationStyles.headerTitleStyle
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
                        headerStyle: navigationStyles.headerStyle,
                        headerTintColor: navigationStyles.headerTintColor
                    }}
                />
            </Stack>
            <StatusBar
                style={navigationStyles.statusBarStyle as 'light' | 'dark'}
                backgroundColor={navigationStyles.statusBarBackground}
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
