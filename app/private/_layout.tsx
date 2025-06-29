import React from 'react';
import {Stack} from 'expo-router';
import {tw, useClassNameToColor} from '@/core/config/nativewind';

export default function PrivateLayout() {
    const headerStyle = tw`bg-background-primary dark:bg-dark-background-secondary`;
    const headerTitleStyle = tw`font-bold text-text-primary dark:text-dark-text-primary`;
    const headerTintColor = useClassNameToColor(
        'text-text-primary dark:text-dark-text-primary'
    );

    return (
        <Stack
            screenOptions={{
                headerStyle,
                headerTintColor,
                headerTitleStyle
            }}
        >
            <Stack.Screen
                name="home"
                options={{
                    title: 'Área Privada',
                    headerShown: true
                }}
            />
        </Stack>
    );
}
