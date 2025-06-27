import {useLingui} from '@lingui/react';
import {changeLocale, getAvailableLocales, LocaleType} from './index';

// Hook para trocar idioma facilmente com reatividade
export const useLocale = () => {
    const {i18n} = useLingui();

    return {
        currentLocale: i18n.locale as LocaleType,
        availableLocales: getAvailableLocales(),
        changeLocale: async (locale: LocaleType) => {
            await changeLocale(locale);
        }
    };
};
