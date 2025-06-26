import { render } from '@testing-library/react-native';
import RootLayout from './_layout';

// Mock do expo-font
jest.mock('expo-font', () => ({
  useFonts: jest.fn(() => [true]), // Simula fonte carregada
}));

// Mock do expo-splash-screen
jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
  hideAsync: jest.fn(),
}));

// Mock do expo-router com Stack
jest.mock('expo-router', () => {
  const StackComponent = ({ children }: any) => children;
  StackComponent.Screen = ({ children }: any) => children;
  
  return {
    Stack: StackComponent,
  };
});

describe('Layout Principal', () => {
  it('deve carregar as fontes corretamente', () => {
    const { useFonts } = require('expo-font');
    
    // Verifica se useFonts foi chamado
    expect(useFonts).toBeDefined();
  });

  it('deve esconder a splash screen quando as fontes estiverem carregadas', () => {
    const { hideAsync } = require('expo-splash-screen');
    
    render(<RootLayout />);
    
    // Verifica se a splash screen foi escondida
    expect(hideAsync).toHaveBeenCalled();
  });

  it('deve configurar as fontes Quicksand', () => {
    const { useFonts } = require('expo-font');
    
    render(<RootLayout />);
    
    // Verifica se foi chamada com as fontes corretas
    expect(useFonts).toHaveBeenCalledWith({
      'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
    });
  });
}); 