import type {PressableProps} from 'react-native';
import type {VariantProps} from 'class-variance-authority';
import {buttonVariant, textVariant} from './button.variant';

export namespace NButtonAtom {
    export type Props = TWithTestID &
        Omit<PressableProps, 'className'> &
        VariantProps<typeof buttonVariant> &
        VariantProps<typeof textVariant> & {
            loading?: boolean;
        };
}
