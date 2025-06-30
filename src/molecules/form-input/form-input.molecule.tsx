import React from 'react';
import {Controller, Control, FieldPath, FieldValues} from 'react-hook-form';
import {InputAtom, NInputAtom} from '@/atoms/input';

export interface FormInputProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Omit<NInputAtom.Props, 'value' | 'onChangeText' | 'onBlur'> {
    control: Control<TFieldValues>;
    name: TName;
}

export function FormInput<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({control, name, ...inputProps}: FormInputProps<TFieldValues, TName>) {
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
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    error={error?.message}
                />
            )}
        />
    );
}
