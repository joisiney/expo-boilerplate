import {FC, PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {NText} from './text.types';
import {getTextClasses} from './text.variant';

export const TextAtom: FC<PropsWithChildren<NText.Props>> = ({
    children,
    variant = 'body',
    size = 'medium',
    className = '',
    ...props
}) => {
    const classes = getTextClasses(variant, size, className);

    return (
        <Text className={classes} {...props}>
            {children}
        </Text>
    );
};
