import type {TextInputProps} from 'react-native';
import type {VariantProps} from 'class-variance-authority';
import {inputVariant} from './input.variant';

export namespace NInputAtom {
    export type Props = TWithTestID &
        Omit<TextInputProps, 'className'> &
        VariantProps<typeof inputVariant> & {
            label?: string;
            error?: string;
        };
}
