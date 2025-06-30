import {JSX} from 'react';
import Index from '@app/index';
import {render, screen} from '@testing-library/react-native';
import {AuthProvider} from '@/core/config/auth';
import {LinguiProvider} from '@/core/config/lingui/provider';
import {ThemeProvider} from '@/core/config/theme';

const HocMount = (
    props?: Partial<React.ComponentProps<typeof Index>>
): JSX.Element => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <LinguiProvider>
                    <Index {...props} />
                </LinguiProvider>
            </ThemeProvider>
        </AuthProvider>
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

    it('deve exibir o subtítulo sobre autenticação', () => {
        render(<HocMount />);

        expect(
            screen.getByText(
                'Template moderno com autenticação, rotas protegidas e React Query'
            )
        ).toBeTruthy();
    });

    it('deve exibir a seção de recursos', () => {
        render(<HocMount />);

        expect(screen.getByText('Recursos')).toBeTruthy();
        expect(screen.getByText('🔐 Autenticação')).toBeTruthy();
        expect(screen.getByText('📱 React Query')).toBeTruthy();
        expect(screen.getByText('🎨 Formulários')).toBeTruthy();
    });

    it('deve exibir o controle de tema', () => {
        render(<HocMount />);

        expect(screen.getByText('Tema')).toBeTruthy();
    });

    it('deve exibir status de autenticação', () => {
        render(<HocMount />);

        // Deve mostrar uma das duas mensagens de status
        const loggedInText = screen.queryByText('✅ Você está logado!');
        const notLoggedInText = screen.queryByText('🔒 Você não está logado');

        expect(loggedInText || notLoggedInText).toBeTruthy();
    });
});
