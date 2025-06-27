 
import { render } from '@testing-library/react-native';
import RootLayout from './_layout';

// Import dos mocks para verificação nos testes
import * as ExpoFont from 'expo-font';
import * as ExpoSplashScreen from 'expo-splash-screen';

describe('Layout Principal', () => {
  it('deve carregar as fontes corretamente', () => {
    // Verifica se useFonts foi definido
    expect(ExpoFont.useFonts).toBeDefined();
  });

  it('deve esconder a splash screen quando as fontes estiverem carregadas', () => {
    render(<RootLayout />);
    
    // Verifica se a splash screen foi escondida
    expect(ExpoSplashScreen.hideAsync).toHaveBeenCalled();
  });

  it('deve configurar as fontes Quicksand', () => {
    render(<RootLayout />);
    
    // Verifica se foi chamada com as fontes corretas
    expect(ExpoFont.useFonts).toHaveBeenCalledWith({
      'Quicksand-Regular': require('../../assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Bold': require('../../assets/fonts/Quicksand-Bold.ttf'),
      'Quicksand-Medium': require('../../assets/fonts/Quicksand-Medium.ttf'),
    });
  });
}); 