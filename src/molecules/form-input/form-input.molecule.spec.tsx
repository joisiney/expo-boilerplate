import {JSX} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {render, screen} from '@testing-library/react-native';
import {z} from 'zod';
import {FormInput} from './form-input.molecule';

// Schema de teste
const testSchema = z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'Mínimo 6 caracteres')
});

type HocMountData = z.infer<typeof testSchema>;

const HocMount = (): JSX.Element => {
    const {control} = useForm<HocMountData>({
        resolver: zodResolver(testSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    return (
        <>
            <FormInput
                control={control}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                testID="email-input"
            />
            <FormInput
                control={control}
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                secureTextEntry
                testID="password-input"
            />
        </>
    );
};

describe('FormInput', () => {
    it('deve renderizar corretamente', () => {
        render(<HocMount />);

        expect(screen.getByTestId('email-input-atom')).toBeTruthy();
        expect(screen.getByTestId('password-input-atom')).toBeTruthy();
        expect(screen.getByText('Email')).toBeTruthy();
        expect(screen.getByText('Senha')).toBeTruthy();
    });

    it('deve aplicar propriedades do InputAtom', () => {
        render(<HocMount />);

        const passwordInput = screen.getByTestId('password-input-atom-input');
        expect(passwordInput.props.secureTextEntry).toBe(true);
    });

    it('deve ter placeholders corretos', () => {
        render(<HocMount />);

        expect(screen.getByPlaceholderText('Digite seu email')).toBeTruthy();
        expect(screen.getByPlaceholderText('Digite sua senha')).toBeTruthy();
    });
});
