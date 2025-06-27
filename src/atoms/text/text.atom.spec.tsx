import { render, screen } from '@testing-library/react-native';
import { TextAtom } from './text.atom';

describe('TextAtom', () => {
  it('deve renderizar o texto corretamente', () => {
    render(<TextAtom>Hello World</TextAtom>);
    
    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('deve aplicar a variante heading', () => {
    render(<TextAtom variant="heading">Título</TextAtom>);
    
    expect(screen.getByText('Título')).toBeTruthy();
  });

  it('deve aplicar cor customizada', () => {
    render(<TextAtom color="#ff0000">Texto Vermelho</TextAtom>);
    
    expect(screen.getByText('Texto Vermelho')).toBeTruthy();
  });

  it('deve aplicar tamanho large', () => {
    render(<TextAtom size="large">Texto Grande</TextAtom>);
    
    expect(screen.getByText('Texto Grande')).toBeTruthy();
  });

  it('deve usar valores padrão', () => {
    render(<TextAtom>Texto Padrão</TextAtom>);
    
    expect(screen.getByText('Texto Padrão')).toBeTruthy();
  });
}); 