import {JSX} from 'react';
import Index from '@app/index';
import {render, screen} from '@testing-library/react-native';
import {LinguiProvider} from '@/core/config/lingui/provider';
import {ThemeProvider} from '@/core/config/theme';

const HocMount = (
    props?: Partial<React.ComponentProps<typeof Index>>
): JSX.Element => {
    return (
        <ThemeProvider>
            <LinguiProvider>
                <Index {...props} />
            </LinguiProvider>
        </ThemeProvider>
    );
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

        expect(
            screen.getByText('Um ponto de partida para seus projetos')
        ).toBeTruthy();
    });

    it('deve exibir os botões de idioma', () => {
        render(<HocMount />);

        expect(screen.getByText('Português (Brasil)')).toBeTruthy();
        expect(screen.getByText('English')).toBeTruthy();
    });

    it('deve exibir a lista de funcionalidades', () => {
        render(<HocMount />);

        expect(screen.getByText('✨ Expo Router')).toBeTruthy();
        expect(screen.getByText('🎨 Fonte Quicksand')).toBeTruthy();
        expect(screen.getByText('🧪 Jest + Testing Library')).toBeTruthy();
        expect(screen.getByText('📱 TypeScript')).toBeTruthy();
        expect(screen.getByText('🎯 ESLint + Prettier')).toBeTruthy();
    });

    it('deve exibir o controle de tema', () => {
        render(<HocMount />);

        expect(screen.getByText('Controle de Tema')).toBeTruthy();
        expect(screen.getByText(/Tema:/)).toBeTruthy();
    });

    it('deve exibir a nova funcionalidade de temas', () => {
        render(<HocMount />);

        expect(
            screen.getByText('🌙 Sistema de Temas (Light/Dark)')
        ).toBeTruthy();
    });
});
