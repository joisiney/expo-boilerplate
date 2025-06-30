import React from 'react';
import {View, ScrollView} from 'react-native';
import {t} from '@lingui/core/macro';
import {Link, router} from 'expo-router';
import {ButtonAtom} from '@/atoms/button';
import TextAtom from '@/atoms/text';
import {ThemeToggle} from '@/atoms/theme-toggle';
import {useAuth} from '@/core/config/auth';

export default function HomeScreen() {
    const {isAuthenticated, user, signOut} = useAuth();

    const handleGoToPrivate = () => {
        router.push('/private/home');
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <ScrollView className="flex-1 bg-background-primary dark:bg-dark-background-primary">
            <View className="flex-1 items-center justify-center px-6 py-12">
                {/* Header */}
                <View className="items-center mb-8">
                    <TextAtom className="text-3xl font-bold text-center mb-4 text-text-primary dark:text-dark-text-primary">
                        {t`Expo Boilerplate`}
                    </TextAtom>
                    <TextAtom className="text-base text-center text-text-secondary dark:text-dark-text-secondary">
                        {t`Template moderno com autenticação, rotas protegidas e React Query`}
                    </TextAtom>
                </View>

                {/* Authentication Status */}
                <View className="w-full max-w-sm mb-8">
                    {isAuthenticated ? (
                        <View className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <TextAtom className="text-green-800 dark:text-green-200 font-medium text-center mb-2">
                                ✅ Você está logado!
                            </TextAtom>
                            <TextAtom className="text-green-700 dark:text-green-300 text-sm text-center mb-4">
                                Olá, {user?.name}
                            </TextAtom>
                            <View className="space-y-2">
                                <ButtonAtom
                                    onPress={handleGoToPrivate}
                                    size="sm"
                                >
                                    Ir para Área Privada
                                </ButtonAtom>
                                <ButtonAtom
                                    variant="outline"
                                    onPress={handleSignOut}
                                    size="sm"
                                >
                                    Sair
                                </ButtonAtom>
                            </View>
                        </View>
                    ) : (
                        <View className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <TextAtom className="text-blue-800 dark:text-blue-200 font-medium text-center mb-2">
                                🔒 Você não está logado
                            </TextAtom>
                            <TextAtom className="text-blue-700 dark:text-blue-300 text-sm text-center mb-4">
                                Faça login para acessar a área privada
                            </TextAtom>
                            <Link href="/sign-in" asChild>
                                <ButtonAtom size="sm">Fazer Login</ButtonAtom>
                            </Link>
                        </View>
                    )}
                </View>

                {/* Features */}
                <View className="w-full max-w-sm mb-8">
                    <TextAtom className="text-xl font-bold text-center mb-4 text-text-primary dark:text-dark-text-primary">
                        {t`Recursos`}
                    </TextAtom>
                    <View className="space-y-3">
                        <View className="bg-white dark:bg-gray-800 rounded-lg p-3">
                            <TextAtom className="font-medium text-text-primary dark:text-dark-text-primary">
                                🔐 Autenticação
                            </TextAtom>
                            <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                Sistema completo com rotas protegidas
                            </TextAtom>
                        </View>
                        <View className="bg-white dark:bg-gray-800 rounded-lg p-3">
                            <TextAtom className="font-medium text-text-primary dark:text-dark-text-primary">
                                📱 React Query
                            </TextAtom>
                            <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                Gerenciamento de estado com Suspense
                            </TextAtom>
                        </View>
                        <View className="bg-white dark:bg-gray-800 rounded-lg p-3">
                            <TextAtom className="font-medium text-text-primary dark:text-dark-text-primary">
                                🎨 Formulários
                            </TextAtom>
                            <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                React Hook Form + Zod validation
                            </TextAtom>
                        </View>
                    </View>
                </View>

                {/* Theme Toggle */}
                <View className="items-center">
                    <TextAtom className="text-sm mb-3 text-text-secondary dark:text-dark-text-secondary">
                        {t`Tema`}
                    </TextAtom>
                    <ThemeToggle />
                </View>
            </View>
        </ScrollView>
    );
}
