import React from 'react';
import {render, screen} from '@testing-library/react-native';
import NotFoundScreen from '../../app/+not-found';
import {LinguiProvider} from '@/core/config/lingui/provider';
import {ThemeProvider} from '@/core/config/theme';

const HocMount = () => (
    <LinguiProvider>
        <ThemeProvider>
            <NotFoundScreen />
        </ThemeProvider>
    </LinguiProvider>
);

describe('Página 404', () => {
    it('deve renderizar corretamente', () => {
        render(<HocMount />);

        expect(screen.getByText('Esta página não existe.')).toBeTruthy();
        expect(screen.getByText('Voltar para a tela inicial')).toBeTruthy();
    });

    it('deve exibir a mensagem de erro', () => {
        render(<HocMount />);

        expect(screen.getByText('Esta página não existe.')).toBeTruthy();
    });

    it('deve ter um botão para voltar à tela inicial', () => {
        render(<HocMount />);

        expect(screen.getByText('Voltar para a tela inicial')).toBeTruthy();
    });
});
