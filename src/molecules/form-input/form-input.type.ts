import type {Control, FieldPath, FieldValues} from 'react-hook-form';
import type {NInputAtom} from '@/atoms/input';

export namespace NFormInputMolecule {
    export interface Props<
        TFieldValues extends FieldValues = FieldValues,
        TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
    > extends Omit<NInputAtom.Props, 'value' | 'onChangeText' | 'onBlur'> {
        control: Control<TFieldValues>;
        name: TName;
    }
}
