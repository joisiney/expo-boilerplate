export const useTheme = jest.fn(() => ({
    theme: 'light',
    effectiveTheme: 'light',
    toggleTheme: jest.fn(),
    setTheme: jest.fn()
}));

// Mock das traduções
export const t = jest.fn((key: string) => {
    const translations: Record<string, string> = {
        Claro: 'Claro',
        Escuro: 'Escuro',
        Sistema: 'Sistema',
        Tema: 'Tema',
        Ativo: 'Ativo'
    };
    return translations[key] || key;
});
