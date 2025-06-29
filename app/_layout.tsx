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
import {AuthProvider, useAuth} from '@/core/config/auth';
import {LinguiProvider} from '@/core/config/lingui/provider';
import {tw, useClassNameToColor} from '@/core/config/nativewind';
import {ReactQueryProvider} from '@/core/config/react-query';
import {ThemeProvider} from '@/core/config/theme';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

function RootLayoutContent() {
    const [loaded] = useFonts({
        Quicksand_400Regular,
        Quicksand_500Medium,
        Quicksand_700Bold
    });

    const {isAuthenticated} = useAuth();

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

                {/* Rota de login - só disponível quando não autenticado */}
                <Stack.Protected guard={!isAuthenticated}>
                    <Stack.Screen
                        name="sign-in"
                        options={{
                            headerShown: true,
                            title: 'Entrar'
                        }}
                    />
                </Stack.Protected>

                {/* Rotas protegidas - só disponível quando autenticado */}
                <Stack.Protected guard={isAuthenticated}>
                    <Stack.Screen
                        name="private"
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Protected>

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
        <ReactQueryProvider>
            <ThemeProvider>
                <AuthProvider>
                    <LinguiProvider>
                        <RootLayoutContent />
                    </LinguiProvider>
                </AuthProvider>
            </ThemeProvider>
        </ReactQueryProvider>
    );
}
