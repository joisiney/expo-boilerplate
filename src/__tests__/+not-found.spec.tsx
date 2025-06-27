import NotFoundScreen from '@app/+not-found';
import { render, screen } from '@testing-library/react-native';
import { JSX } from 'react';

const HocMount = (props?: Partial<React.ComponentProps<typeof NotFoundScreen>>): JSX.Element => {
  return <NotFoundScreen {...props} />;
};

describe('Página 404', () => {
  it('deve renderizar corretamente', () => {
    const component = render(<HocMount />);
    
    expect(component).toBeTruthy();
  });

  it('deve exibir o título 404', () => {
    render(<HocMount />);
    
    expect(screen.getByText('404')).toBeTruthy();
  });

  it('deve exibir a mensagem de página não encontrada', () => {
    render(<HocMount />);
    
    expect(screen.getByText('Página não encontrada')).toBeTruthy();
  });

  it('deve exibir a descrição explicativa', () => {
    render(<HocMount />);
    
    expect(screen.getByText('A página que você está procurando não existe.')).toBeTruthy();
  });
}); 