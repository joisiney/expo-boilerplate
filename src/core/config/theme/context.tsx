import React, {createContext, useContext, useState, useEffect} from 'react';
import {useColorScheme} from 'nativewind';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
    theme: Theme;
    effectiveTheme: 'light' | 'dark';
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: React.ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProps) {
    const {colorScheme, setColorScheme} = useColorScheme();
    const [theme, setTheme] = useState<Theme>('system');

    // Determina o tema efetivo baseado na preferência
    const effectiveTheme: 'light' | 'dark' =
        theme === 'system' ? (colorScheme ?? 'light') : theme;

    // Sincroniza mudanças do tema com o NativeWind
    useEffect(() => {
        if (theme === 'system') {
            setColorScheme('system');
        } else {
            setColorScheme(theme);
        }
    }, [theme, setColorScheme]);

    const toggleTheme = () => {
        setTheme((current) => {
            if (current === 'light') return 'dark';
            if (current === 'dark') return 'system';
            return 'light';
        });
    };

    const handleSetTheme = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    const value: ThemeContextType = {
        theme,
        effectiveTheme,
        setTheme: handleSetTheme,
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
