// Mock do useTheme antes de qualquer import
jest.mock('@/core/config/theme', () => ({
    useTheme: jest.fn(() => ({
        theme: 'light',
        effectiveTheme: 'light',
        toggleTheme: jest.fn(),
        setTheme: jest.fn()
    }))
}));

import {JSX} from 'react';
import {render, screen} from '@testing-library/react-native';
import {ThemeToggleMolecule} from './theme-toggle.molecule';

const HocMount = (
    props?: Partial<React.ComponentProps<typeof ThemeToggleMolecule>>
): JSX.Element => {
    return <ThemeToggleMolecule testID="theme-toggle" {...props} />;
};

describe('Molecule: <ThemeToggleMolecule />', () => {
    it('deve renderizar corretamente', () => {
        render(<HocMount />);
        const sut = screen.getByTestId('theme-toggle-molecule');
        expect(sut).toBeTruthy();
    });

    it('deve exibir o ícone do tema', () => {
        render(<HocMount />);
        // Verifica se algum dos ícones está presente
        const hasIcon =
            screen.getByText('☀️') ||
            screen.getByText('🌙') ||
            screen.getByText('🔄');
        expect(hasIcon).toBeTruthy();
    });

    it('deve exibir o texto "Tema:"', () => {
        render(<HocMount />);
        expect(screen.getByText(/Tema:/)).toBeTruthy();
    });

    it('deve exibir o texto "Ativo:"', () => {
        render(<HocMount />);
        expect(screen.getByText(/Ativo:/)).toBeTruthy();
    });

    it('não deve renderizar corretamente se testID for omitido', () => {
        render(<HocMount testID={undefined} />);
        const sut = screen.queryByTestId('theme-toggle-molecule');
        expect(sut).toBeNull();
    });
});
