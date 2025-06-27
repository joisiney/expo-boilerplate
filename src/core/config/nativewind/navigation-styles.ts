import {useColorScheme} from 'nativewind';
import {colors} from './colors';

// Hook para obter estilos do React Navigation baseados no tema
export function useNavigationStyles() {
    const {colorScheme} = useColorScheme();
    const isDark = colorScheme === 'dark';

    return {
        // Estilos para header
        headerStyle: {
            backgroundColor: isDark
                ? colors.dark.background.secondary
                : colors.background.primary
        },
        headerTintColor: isDark
            ? colors.dark.text.primary
            : colors.text.primary,
        headerTitleStyle: {
            fontWeight: 'bold' as const,
            color: isDark ? colors.dark.text.primary : colors.text.primary
        },

        // Estilos para StatusBar
        statusBarStyle: isDark ? 'light' : 'dark',
        statusBarBackground: isDark
            ? colors.dark.background.primary
            : colors.background.primary,

        // Estilos para TabBar (se usar no futuro)
        tabBarStyle: {
            backgroundColor: isDark
                ? colors.dark.background.secondary
                : colors.background.primary,
            borderTopColor: isDark
                ? colors.dark.border.light
                : colors.border.light
        },
        tabBarActiveTintColor: isDark
            ? colors.dark.text.primary
            : colors.text.primary,
        tabBarInactiveTintColor: isDark
            ? colors.dark.text.secondary
            : colors.text.secondary
    };
}
