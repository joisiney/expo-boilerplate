import { render, screen } from '@testing-library/react-native';
import NotFoundScreen from './+not-found';

describe('Página 404', () => {
  it('deve renderizar corretamente', () => {
    const component = render(<NotFoundScreen />);
    
    expect(component).toBeTruthy();
  });

  it('deve exibir o título 404', () => {
    render(<NotFoundScreen />);
    
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('deve exibir a mensagem de página não encontrada', () => {
    render(<NotFoundScreen />);
    
    expect(screen.getByText('Página não encontrada')).toBeTruthy();
  });

  it('deve exibir a descrição explicativa', () => {
    render(<NotFoundScreen />);
    
    expect(screen.getByText('A página que você está procurando não existe.')).toBeTruthy();
  });
}); 