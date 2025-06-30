import {forwardRef} from 'react';
import {Text, TextInput, View} from 'react-native';
import {NInputAtom} from './input.types';
import {inputVariant} from './input.variant';

export const InputAtom = forwardRef<TextInput, NInputAtom.Props>(
    (
        {testID, label, error, variant = 'default', size = 'default', ...props},
        ref
    ) => {
        return (
            <View testID={`${testID}-atom`} className="w-full">
                {label && (
                    <Text className="text-sm font-medium text-foreground dark:text-dark-foreground mb-2">
                        {label}
                    </Text>
                )}
                <TextInput
                    className={inputVariant({variant, size})}
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

InputAtom.displayName = 'InputAtom';
