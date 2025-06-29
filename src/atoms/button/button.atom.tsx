import React from 'react';
import {Pressable, PressableProps, Text, ActivityIndicator} from 'react-native';

export interface ButtonProps extends Omit<PressableProps, 'className'> {
    title: string;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';
    size?: 'default' | 'sm' | 'lg';
    loading?: boolean;
}

export function Button({
    title,
    variant = 'default',
    size = 'default',
    loading = false,
    disabled,
    ...props
}: ButtonProps) {
    const getButtonClasses = () => {
        let classes = 'rounded-md items-center justify-center flex-row';

        // Variant styles
        switch (variant) {
            case 'destructive':
                classes += ' bg-red-500 dark:bg-red-600';
                break;
            case 'outline':
                classes +=
                    ' border border-border bg-transparent dark:border-dark-border';
                break;
            case 'secondary':
                classes += ' bg-gray-100 dark:bg-gray-800';
                break;
            case 'ghost':
                classes += ' bg-transparent';
                break;
            default:
                classes += ' bg-blue-500 dark:bg-blue-600';
        }

        // Size styles
        if (size === 'sm') {
            classes += ' h-8 px-3';
        } else if (size === 'lg') {
            classes += ' h-12 px-8';
        } else {
            classes += ' h-10 px-4';
        }

        // Disabled state
        if (disabled || loading) {
            classes += ' opacity-50';
        }

        return classes;
    };

    const getTextClasses = () => {
        let classes = 'font-medium';

        // Size styles
        if (size === 'sm') {
            classes += ' text-xs';
        } else if (size === 'lg') {
            classes += ' text-base';
        } else {
            classes += ' text-sm';
        }

        // Variant text colors
        switch (variant) {
            case 'destructive':
                classes += ' text-white';
                break;
            case 'outline':
                classes += ' text-foreground dark:text-dark-foreground';
                break;
            case 'secondary':
                classes += ' text-gray-900 dark:text-gray-100';
                break;
            case 'ghost':
                classes += ' text-foreground dark:text-dark-foreground';
                break;
            default:
                classes += ' text-white';
        }

        return classes;
    };

    return (
        <Pressable
            className={getButtonClasses()}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <ActivityIndicator
                    size="small"
                    color={
                        variant === 'outline' || variant === 'ghost'
                            ? '#6B7280'
                            : '#FFFFFF'
                    }
                    style={{marginRight: 8}}
                />
            )}
            <Text className={getTextClasses()}>{title}</Text>
        </Pressable>
    );
}
