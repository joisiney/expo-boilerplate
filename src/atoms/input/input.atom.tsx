import {forwardRef} from 'react';
import {TextInput, View} from 'react-native';
import {NInputAtom} from './input.types';
import {inputVariant} from './input.variant';
import TextAtom from '@/atoms/text';

export const InputAtom = forwardRef<TextInput, NInputAtom.Props>(
    (
        {testID, label, error, variant = 'default', size = 'default', ...props},
        ref
    ) => {
        return (
            <View testID={`${testID}-atom`} className="w-full">
                {label && (
                    <TextAtom
                        variant="label"
                        className="mb-2"
                        testID={`${testID}-atom-label`}
                    >
                        {label}
                    </TextAtom>
                )}
                <TextInput
                    className={inputVariant({variant, size})}
                    placeholderTextColor="#6B7280"
                    ref={ref}
                    {...props}
                    testID={`${testID}-atom-input`}
                />
                {error && (
                    <TextAtom
                        variant="caption"
                        className="mt-1 text-red-500 dark:text-red-400"
                        testID={`${testID}-atom-error`}
                    >
                        {error}
                    </TextAtom>
                )}
            </View>
        );
    }
);

InputAtom.displayName = 'InputAtom';
