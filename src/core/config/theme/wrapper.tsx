import React from 'react';
import {View, ViewProps} from 'react-native';
import {useThemedStyles} from './hooks';

interface ThemedViewProps extends ViewProps {
    children: React.ReactNode;
    className?: string;
}

export function ThemedView({
    children,
    className = '',
    style,
    ...props
}: ThemedViewProps) {
    const {theme} = useThemedStyles();

    // Aplica a classe dark quando necessário
    const themeClass = theme === 'dark' ? 'dark' : '';
    const combinedClassName = `${themeClass} ${className}`.trim();

    return (
        <View className={combinedClassName} style={style} {...props}>
            {children}
        </View>
    );
}
