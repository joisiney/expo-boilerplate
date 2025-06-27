import React, {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';

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
    const systemColorScheme = useColorScheme();
    const [theme, setTheme] = useState<Theme>('system');

    // Determina o tema efetivo baseado na preferência
    const effectiveTheme: 'light' | 'dark' =
        theme === 'system' ? (systemColorScheme ?? 'light') : theme;

    const toggleTheme = () => {
        setTheme((current) => {
            if (current === 'light') return 'dark';
            if (current === 'dark') return 'system';
            return 'light';
        });
    };

    const value: ThemeContextType = {
        theme,
        effectiveTheme,
        setTheme,
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
