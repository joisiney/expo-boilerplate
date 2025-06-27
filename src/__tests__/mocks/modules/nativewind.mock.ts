jest.mock('nativewind', () => ({
    withNativeWind: jest.fn((config) => config),
    useColorScheme: () => ({
        colorScheme: 'light',
        setColorScheme: jest.fn(),
        toggleColorScheme: jest.fn()
    })
}));

export const useColorScheme = () => ({
    colorScheme: 'light',
    setColorScheme: jest.fn(),
    toggleColorScheme: jest.fn()
});
