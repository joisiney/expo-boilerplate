import {Controller, FieldPath, FieldValues} from 'react-hook-form';
import {NFormInputMolecule} from './form-input.type';
import {InputAtom} from '@/atoms/input';

export const FormInputMolecule = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    testID,
    control,
    name,
    ...inputProps
}: NFormInputMolecule.Props<TFieldValues, TName>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: {onChange, onBlur, value},
                fieldState: {error}
            }) => (
                <InputAtom
                    {...inputProps}
                    testID={testID}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                />
            )}
        />
    );
};
