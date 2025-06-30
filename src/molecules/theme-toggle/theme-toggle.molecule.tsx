import {FC} from 'react';
import {View} from 'react-native';
import {NThemeToggleMolecule} from './theme-toggle.type';
import {useUseCase} from './theme-toggle.use-case';
import {ButtonAtom} from '@/atoms/button';
import TextAtom from '@/atoms/text';

export const ThemeToggleMolecule: FC<NThemeToggleMolecule.Props> = ({
    testID,
    className = '',
    ...buttonProps
}) => {
    const {toggleTheme, getThemeIcon, getThemeLabel, getEffectiveThemeLabel} =
        useUseCase();

    return (
        <View testID={`${testID}-molecule`} className={`w-full ${className}`}>
            <ButtonAtom
                {...buttonProps}
                testID={testID}
                onPress={toggleTheme}
                variant="outline"
            >
                <TextAtom size="2xl" className="mr-2">
                    {getThemeIcon()}
                </TextAtom>
                <TextAtom
                    variant="label"
                    className="text-text-primary dark:text-dark-text-primary"
                >
                    Tema: {getThemeLabel()}
                </TextAtom>
                <TextAtom
                    variant="caption"
                    className="ml-2 text-text-secondary dark:text-dark-text-secondary"
                >
                    (Ativo: {getEffectiveThemeLabel()})
                </TextAtom>
            </ButtonAtom>
        </View>
    );
};
