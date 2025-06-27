import { render, screen } from '@testing-library/react-native';
import { JSX } from 'react';
import { TextAtom } from './text.atom';

const HocMount = (props?: Partial<React.ComponentProps<typeof TextAtom>>): JSX.Element => {
  return <TextAtom testID="text-atom" { ...props} />;
};
describe('TextAtom', () => {
  it('deve renderizar o texto corretamente', () => {
    render(<HocMount>Hello World</HocMount>);
    
    expect(screen.getByText('Hello World')).toBeTruthy();
  });

  it('deve aplicar a variante heading', () => {
    render(<HocMount variant="heading">Título</HocMount>);
    
    expect(screen.getByText('Título')).toBeTruthy();
  });

  it('deve aplicar cor customizada', () => {
    render(<HocMount>Texto Vermelho</HocMount>);
    
    expect(screen.getByText('Texto Vermelho')).toBeTruthy();
  });

  it('deve aplicar tamanho large', () => {
    render(<HocMount size="large">Texto Grande</HocMount>);
    
    expect(screen.getByText('Texto Grande')).toBeTruthy();
  });

  it('deve usar valores padrão', () => {
    render(<HocMount>Texto Padrão</HocMount>);
    
    expect(screen.getByText('Texto Padrão')).toBeTruthy();
  });
}); 