import { render, screen } from '@testing-library/react-native';
import Index from './index';

describe('Página Index', () => {
  it('deve renderizar corretamente', () => {
    const component = render(<Index />);
    
    // Verifica se o componente foi renderizado
    expect(component).toBeTruthy();
  });

  it('deve exibir o título do boilerplate', () => {
    render(<Index />);
    
    // Verifica se o título está presente
    expect(screen.getByText('Expo Boilerplate')).toBeTruthy();
  });

  it('deve exibir o subtítulo', () => {
    render(<Index />);
    
    // Verifica se o subtítulo está presente
    expect(screen.getByText('Um ponto de partida para seus projetos')).toBeTruthy();
  });

  it('deve renderizar o componente SVG', () => {
    render(<Index />);
    
    // Verifica se o SVG está presente
    expect(screen.getByTestId('test-svg')).toBeTruthy();
  });

  it('deve exibir a lista de funcionalidades', () => {
    render(<Index />);
    
    // Verifica se as funcionalidades estão presentes
    expect(screen.getByText('✨ Expo Router')).toBeTruthy();
    expect(screen.getByText('🎨 Fonte Quicksand')).toBeTruthy();
    expect(screen.getByText('🧪 Jest + Testing Library')).toBeTruthy();
    expect(screen.getByText('📱 TypeScript')).toBeTruthy();
    expect(screen.getByText('🎯 ESLint')).toBeTruthy();
  });
}); 