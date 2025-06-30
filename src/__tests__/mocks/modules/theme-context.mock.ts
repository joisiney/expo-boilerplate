export const useTheme = jest.fn(() => ({
    theme: 'light',
    effectiveTheme: 'light',
    toggleTheme: jest.fn(),
    setTheme: jest.fn()
}));
