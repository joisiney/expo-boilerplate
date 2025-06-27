import {i18n} from '@lingui/core';

// Configuração dos locales disponíveis
export const locales = {
    'pt-BR': 'Português (Brasil)',
    en: 'English'
} as const;

// Locale padrão
export const defaultLocale = 'pt-BR' as const;

// Tipo para os locales
export type LocaleType = keyof typeof locales;

// Função para carregar traduções dinamicamente
const loadMessages = async (locale: LocaleType) => {
    // Evitar dynamic imports durante os testes
    if (process.env.EXPO_PUBLIC_ENV === 'jest') {
        // Para testes, usar mensagens mock
        const mockMessages = {
            'Expo Boilerplate': 'Expo Boilerplate',
            'Um ponto de partida para seus projetos':
                'Um ponto de partida para seus projetos',
            'Idioma atual': 'Idioma atual'
        };
        i18n.load(locale, mockMessages);
        return;
    }

    try {
        if (locale === 'pt-BR') {
            const {messages} = await import('./locales/pt-BR/messages.mjs');
            i18n.load(locale, messages);
        } else if (locale === 'en') {
            const {messages} = await import('./locales/en/messages.mjs');
            i18n.load(locale, messages);
        }
    } catch (error) {
        console.warn(`Failed to load messages for locale ${locale}:`, error);
    }
};

// Ativar o locale inicial
loadMessages(defaultLocale).then(() => {
    i18n.activate(defaultLocale);
});

// Exportar instância configurada
export {i18n};

// Função utilitária para trocar idioma
export const changeLocale = async (locale: LocaleType): Promise<void> => {
    // Carregar mensagens se ainda não foram carregadas
    await loadMessages(locale);

    // Ativar o novo locale
    i18n.activate(locale);

    // TODO: Implementar persistência com AsyncStorage
};

// Função para obter o locale atual
export const getCurrentLocale = (): LocaleType => {
    return i18n.locale as LocaleType;
};

// Função para obter lista de locales disponíveis
export const getAvailableLocales = (): Array<{
    code: LocaleType;
    name: string;
}> => {
    return Object.entries(locales).map(([code, name]) => ({
        code: code as LocaleType,
        name
    }));
};
