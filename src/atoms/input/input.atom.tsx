import React, {forwardRef} from 'react';
import {TextInput, TextInputProps, View, Text} from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'className'> {
    label?: string;
    error?: string;
    variant?: 'default' | 'outline';
    size?: 'default' | 'sm' | 'lg';
}

const Input = forwardRef<TextInput, InputProps>(
    ({label, error, variant = 'default', size = 'default', ...props}, ref) => {
        const getInputClasses = () => {
            let classes =
                'border bg-background text-foreground placeholder:text-muted-foreground dark:border-dark-border dark:bg-dark-background dark:text-dark-foreground';

            // Variant styles
            if (variant === 'outline') {
                classes += ' border-2 rounded-lg';
            } else {
                classes += ' border rounded-md';
            }

            // Size styles
            if (size === 'sm') {
                classes += ' h-8 px-2 text-xs';
            } else if (size === 'lg') {
                classes += ' h-12 px-4';
            } else {
                classes += ' h-10 px-3 py-2 text-sm';
            }

            return classes;
        };

        return (
            <View className="w-full">
                {label && (
                    <Text className="text-sm font-medium text-foreground dark:text-dark-foreground mb-2">
                        {label}
                    </Text>
                )}
                <TextInput
                    className={getInputClasses()}
                    placeholderTextColor="#6B7280"
                    ref={ref}
                    {...props}
                />
                {error && (
                    <Text className="text-sm text-red-500 dark:text-red-400 mt-1">
                        {error}
                    </Text>
                )}
            </View>
        );
    }
);

Input.displayName = 'Input';

export {Input};
