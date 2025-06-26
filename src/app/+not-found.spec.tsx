import { render, screen } from '@testing-library/react-native';
import NotFoundScreen from './+not-found';

// Mock do expo-router
jest.mock('expo-router', () => {
  const StackComponent = ({ children }: any) => children;
  StackComponent.Screen = ({ children }: any) => children;
  
  return {
    Stack: StackComponent,
  };
});

describe('Página 404', () => {
  it('deve renderizar corretamente', () => {
    const component = render(<NotFoundScreen />);
    
    // Verifica se o componente foi renderizado
    expect(component).toBeTruthy();
  });

  it('deve exibir o título 404', () => {
    render(<NotFoundScreen />);
    
    // Verifica se o título "404" está presente
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('deve exibir a mensagem de página não encontrada', () => {
    render(<NotFoundScreen />);
    
    // Verifica se a mensagem está presente
    expect(screen.getByText('Página não encontrada')).toBeTruthy();
  });

  it('deve exibir a descrição explicativa', () => {
    render(<NotFoundScreen />);
    
    // Verifica se a descrição está presente
    expect(screen.getByText('A página que você está procurando não existe.')).toBeTruthy();
  });
}); 