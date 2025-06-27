// Mock para expo-font
jest.mock('expo-font', () => ({
    useFonts: jest.fn(() => [true]), // Simula fonte carregada
})); 