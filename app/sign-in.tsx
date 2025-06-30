import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Alert
} from 'react-native';
import {zodResolver} from '@hookform/resolvers/zod';
import {router} from 'expo-router';
import {z} from 'zod';
import {ButtonAtom} from '@/atoms/button';
import {InputAtom} from '@/atoms/input';
import TextAtom from '@/atoms/text';
import {useAuth} from '@/core/config/auth';

// Schema de validação com Zod
const signInSchema = z.object({
    email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
    password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres')
});

type SignInFormData = z.infer<typeof signInSchema>;

export default function SignInScreen() {
    const {signIn, isLoading} = useAuth();

    const {
        control,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<SignInFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: SignInFormData) => {
        try {
            await signIn(data.email, data.password);
            router.replace('/private/home');
        } catch (error) {
            Alert.alert(
                'Erro no Login',
                error instanceof Error ? error.message : 'Erro desconhecido'
            );
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1"
        >
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps="handled"
            >
                <View className="flex-1 justify-center px-6 bg-background-primary dark:bg-dark-background-primary">
                    <View className="w-full max-w-sm mx-auto">
                        {/* Header */}
                        <View className="mb-8 items-center">
                            <TextAtom className="text-3xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                                Bem-vindo
                            </TextAtom>
                            <TextAtom className="text-base text-text-secondary dark:text-dark-text-secondary text-center">
                                Entre com sua conta para continuar
                            </TextAtom>
                        </View>

                        {/* Form */}
                        <View className="space-y-4">
                            <Controller
                                control={control}
                                name="email"
                                render={({
                                    field: {onChange, onBlur, value}
                                }) => (
                                    <InputAtom
                                        label="Email"
                                        placeholder="seu@email.com"
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        error={errors.email?.message}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="password"
                                render={({
                                    field: {onChange, onBlur, value}
                                }) => (
                                    <InputAtom
                                        label="Senha"
                                        placeholder="••••••••"
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        error={errors.password?.message}
                                        secureTextEntry
                                        autoComplete="password"
                                    />
                                )}
                            />

                            <ButtonAtom
                                onPress={handleSubmit(onSubmit)}
                                loading={isLoading}
                                disabled={!isValid}
                                size="lg"
                            >
                                Entrar
                            </ButtonAtom>
                        </View>

                        {/* Footer */}
                        <View className="mt-8 items-center">
                            <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                Use qualquer email e senha para testar
                            </TextAtom>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
