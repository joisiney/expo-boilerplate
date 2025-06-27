import { render } from '@testing-library/react-native';
import { JSX } from 'react';
import RootLayout from './_layout';

import * as QuicksandFonts from '@expo-google-fonts/quicksand';
import * as ExpoSplashScreen from 'expo-splash-screen';

const HocMount = (props?: Partial<React.ComponentProps<typeof RootLayout>>): JSX.Element => {
  return <RootLayout {...props} />;
};

describe('Layout Principal', () => {
  it('deve carregar as fontes corretamente', () => {
    expect(QuicksandFonts.useFonts).toBeDefined();
  });

  it('deve esconder a splash screen quando as fontes estiverem carregadas', () => {
    render(<HocMount />);
    
    expect(ExpoSplashScreen.hideAsync).toHaveBeenCalled();
  });

  it('deve configurar as fontes Quicksand do Google Fonts', () => {
    render(<HocMount />);
    
    expect(QuicksandFonts.useFonts).toHaveBeenCalledWith({
      Quicksand_400Regular: 'Quicksand_400Regular',
      Quicksand_500Medium: 'Quicksand_500Medium',
      Quicksand_700Bold: 'Quicksand_700Bold',
    });
  });
}); 