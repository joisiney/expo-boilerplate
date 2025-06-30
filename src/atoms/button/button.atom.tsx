import {FC} from 'react';
import {Text, ActivityIndicator, Pressable} from 'react-native';
import {NButtonAtom} from './button.types';
import {buttonVariant, textVariant} from './button.variant';

export const ButtonAtom: FC<NButtonAtom.Props> = ({
    testID,
    title,
    variant = 'default',
    size = 'default',
    loading = false,
    disabled,
    ...props
}) => {
    const isDisabled = disabled || loading;

    return (
        <Pressable
            testID={`${testID}-atom`}
            className={buttonVariant({variant, size, disabled: isDisabled})}
            disabled={isDisabled}
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
            <Text className={textVariant({variant, size})}>{title}</Text>
        </Pressable>
    );
};
