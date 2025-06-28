import {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_700Bold,
    useFonts
} from '@expo-google-fonts/quicksand';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {LinguiProvider} from '@/core/config/lingui/provider';
import {tw, useClassNameToColor} from '@/core/config/nativewind';
import {ThemeProvider} from '@/core/config/theme';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
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

    const headerStyle = tw`bg-background-primary dark:bg-dark-background-secondary`;
    const headerTitleStyle = tw`font-bold text-text-primary dark:text-dark-text-primary`;
    const headerTintColor = useClassNameToColor(
        'text-text-primary dark:text-dark-text-primary'
    );
    const statusBarBackground = useClassNameToColor(
        'bg-background-primary dark:bg-dark-background-primary'
    );
    if (!loaded) {
        return null;
    }
    return (
        <>
            <Stack
                screenOptions={{
                    headerStyle,
                    headerTintColor,
                    headerTitleStyle
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
                        headerStyle,
                        headerTintColor
                    }}
                />
            </Stack>
            <StatusBar backgroundColor={statusBarBackground} />
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
