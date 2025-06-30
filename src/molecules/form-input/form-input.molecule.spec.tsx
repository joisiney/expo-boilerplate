import {JSX} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {render, screen} from '@testing-library/react-native';
import {z} from 'zod';
import {FormInputMolecule} from './form-input.molecule';

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
            <FormInputMolecule
                control={control}
                name="email"
                label="Email"
                placeholder="Digite seu email"
                testID="email-input"
            />
            <FormInputMolecule
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

describe('Molecule: <FormInputMolecule />', () => {
    it('deve renderizar corretamente', () => {
        render(<HocMount />);

        expect(screen.getByTestId('email-input-atom')).toBeTruthy();
        expect(screen.getByTestId('password-input-atom')).toBeTruthy();
        expect(screen.getByText('Email')).toBeTruthy();
        expect(screen.getByText('Senha')).toBeTruthy();
    });

    it('deve ter placeholders corretos', () => {
        render(<HocMount />);

        expect(screen.getByPlaceholderText('Digite seu email')).toBeTruthy();
        expect(screen.getByPlaceholderText('Digite sua senha')).toBeTruthy();
    });

    it('não deve renderizar corretamente se testID for omitido', () => {
        const Wrapper = () => {
            const {control} = useForm<HocMountData>({
                resolver: zodResolver(testSchema),
                defaultValues: {
                    email: '',
                    password: ''
                }
            });
            return (
                <FormInputMolecule
                    control={control}
                    name="email"
                    label="Email"
                    testID={undefined}
                />
            );
        };
        render(<Wrapper />);
        const sut = screen.queryByTestId('email-input-atom');
        expect(sut).toBeNull();
    });
});
