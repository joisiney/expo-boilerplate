import Index from '@app/index';
import { render, screen } from '@testing-library/react-native';
import { JSX } from 'react';

const HocMount = (props?: Partial<React.ComponentProps<typeof Index>>): JSX.Element => {
  return <Index {...props} />;
};

describe('Página Index', () => {
  it('deve renderizar corretamente', () => {
    const component = render(<HocMount />);
    
    expect(component).toBeTruthy();
  });

  it('deve exibir o título do boilerplate', () => {
    render(<HocMount />);
    
    expect(screen.getByText('Expo Boilerplate')).toBeTruthy();
  });

  it('deve exibir o subtítulo', () => {
    render(<HocMount />);
    
    expect(screen.getByText('Um ponto de partida para seus projetos')).toBeTruthy();
  });

  it('deve renderizar o componente SVG', () => {
    render(<HocMount />);
    
    expect(screen.getByTestId('test-svg')).toBeTruthy();
  });

  it('deve exibir a lista de funcionalidades', () => {
    render(<HocMount />);
    
    expect(screen.getByText('✨ Expo Router')).toBeTruthy();
    expect(screen.getByText('🎨 Fonte Quicksand')).toBeTruthy();
    expect(screen.getByText('🧪 Jest + Testing Library')).toBeTruthy();
    expect(screen.getByText('📱 TypeScript')).toBeTruthy();
    expect(screen.getByText('🎯 ESLint')).toBeTruthy();
  });
}); 