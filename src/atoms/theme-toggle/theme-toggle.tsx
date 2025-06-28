import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {t} from '@lingui/core/macro';
import {useTheme} from '@/core/config/theme';

interface ThemeToggleProps {
    className?: string;
}

export function ThemeToggle({className = ''}: ThemeToggleProps) {
    const {theme, effectiveTheme, toggleTheme} = useTheme();

    const getThemeIcon = () => {
        if (theme === 'light') return '☀️';
        if (theme === 'dark') return '🌙';
        return '🔄'; // system
    };

    const getThemeLabel = () => {
        if (theme === 'light') return t`Claro`;
        if (theme === 'dark') return t`Escuro`;
        return t`Sistema`;
    };

    return (
        <TouchableOpacity
            onPress={toggleTheme}
            className={`flex-row items-center p-3 rounded-lg border border-border-light dark:border-dark-border-light bg-surface-primary dark:bg-dark-surface-primary ${className}`}
        >
            <Text className="text-2xl mr-2">{getThemeIcon()}</Text>
            <Text className="font-medium text-text-primary dark:text-dark-text-primary">
                {t`Tema`}: {getThemeLabel()}
            </Text>
            <Text className="text-sm ml-2 text-text-secondary dark:text-dark-text-secondary">
                ({t`Ativo`}: {effectiveTheme === 'light' ? t`Claro` : t`Escuro`}
                )
            </Text>
        </TouchableOpacity>
    );
}
