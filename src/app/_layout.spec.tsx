 
import { render } from '@testing-library/react-native';
import RootLayout from './_layout';

import * as QuicksandFonts from '@expo-google-fonts/quicksand';
import * as ExpoSplashScreen from 'expo-splash-screen';

describe('Layout Principal', () => {
  it('deve carregar as fontes corretamente', () => {
    expect(QuicksandFonts.useFonts).toBeDefined();
  });

  it('deve esconder a splash screen quando as fontes estiverem carregadas', () => {
    render(<RootLayout />);
    
    expect(ExpoSplashScreen.hideAsync).toHaveBeenCalled();
  });

  it('deve configurar as fontes Quicksand do Google Fonts', () => {
    render(<RootLayout />);
    
    expect(QuicksandFonts.useFonts).toHaveBeenCalledWith({
      Quicksand_400Regular: 'Quicksand_400Regular',
      Quicksand_500Medium: 'Quicksand_500Medium',
      Quicksand_700Bold: 'Quicksand_700Bold',
    });
  });
}); 