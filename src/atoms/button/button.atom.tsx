import {FC, PropsWithChildren} from 'react';
import {ActivityIndicator, Pressable} from 'react-native';
import {NButtonAtom} from './button.types';
import {buttonVariant, textVariant} from './button.variant';
import TextAtom from '@/atoms/text';

export const ButtonAtom: FC<PropsWithChildren<NButtonAtom.Props>> = ({
    testID,
    children,
    variant = 'default',
    size = 'default',
    loading = false,
    disabled,
    ...props
}) => {
    const isDisabled = disabled || loading;

    const renderContent = () => {
        if (typeof children === 'string') {
            return (
                <TextAtom className={textVariant({variant, size})}>
                    {children}
                </TextAtom>
            );
        }
        return children;
    };

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
            {renderContent()}
        </Pressable>
    );
};
