import React from 'react';
import {useColorScheme} from 'nativewind';
import {useTheme} from './context';

export function useThemedStyles() {
    const {effectiveTheme} = useTheme();
    const {setColorScheme} = useColorScheme();

    // Sincroniza o tema com o NativeWind
    React.useEffect(() => {
        setColorScheme(effectiveTheme);
    }, [effectiveTheme, setColorScheme]);

    const isDark = effectiveTheme === 'dark';

    return {
        isDark,
        isLight: !isDark,
        theme: effectiveTheme
    };
}
