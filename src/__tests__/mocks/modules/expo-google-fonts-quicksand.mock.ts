jest.mock('@expo-google-fonts/quicksand', () => ({
  useFonts: jest.fn(() => [true]),
  Quicksand_400Regular: 'Quicksand_400Regular',
  Quicksand_500Medium: 'Quicksand_500Medium', 
  Quicksand_700Bold: 'Quicksand_700Bold',
})); 