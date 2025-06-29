import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Trans} from '@lingui/macro';
import {Link, router} from 'expo-router';
import {Button} from '@/atoms/button';
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
                    <Text className="text-3xl font-bold text-center mb-4 text-text-primary dark:text-dark-text-primary">
                        <Trans>Expo Boilerplate</Trans>
                    </Text>
                    <Text className="text-base text-center text-text-secondary dark:text-dark-text-secondary">
                        <Trans>
                            Template moderno com autenticação, rotas protegidas
                            e React Query
                        </Trans>
                    </Text>
                </View>

                {/* Authentication Status */}
                <View className="w-full max-w-sm mb-8">
                    {isAuthenticated ? (
                        <View className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                            <Text className="text-green-800 dark:text-green-200 font-medium text-center mb-2">
                                ✅ Você está logado!
                            </Text>
                            <Text className="text-green-700 dark:text-green-300 text-sm text-center mb-4">
                                Olá, {user?.name}
                            </Text>
                            <View className="space-y-2">
                                <Button
                                    title="Ir para Área Privada"
                                    onPress={handleGoToPrivate}
                                    size="sm"
                                />
                                <Button
                                    title="Sair"
                                    variant="outline"
                                    onPress={handleSignOut}
                                    size="sm"
                                />
                            </View>
                        </View>
                    ) : (
                        <View className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                            <Text className="text-blue-800 dark:text-blue-200 font-medium text-center mb-2">
                                🔒 Você não está logado
                            </Text>
                            <Text className="text-blue-700 dark:text-blue-300 text-sm text-center mb-4">
                                Faça login para acessar a área privada
                            </Text>
                            <Link href="/sign-in" asChild>
                                <Button title="Fazer Login" size="sm" />
                            </Link>
                        </View>
                    )}
                </View>

                {/* Features */}
                <View className="w-full max-w-sm mb-8">
                    <Text className="text-xl font-bold text-center mb-4 text-text-primary dark:text-dark-text-primary">
                        <Trans>Recursos</Trans>
                    </Text>
                    <View className="space-y-3">
                        <View className="bg-white dark:bg-gray-800 rounded-lg p-3">
                            <Text className="font-medium text-text-primary dark:text-dark-text-primary">
                                🔐 Autenticação
                            </Text>
                            <Text className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                Sistema completo com rotas protegidas
                            </Text>
                        </View>
                        <View className="bg-white dark:bg-gray-800 rounded-lg p-3">
                            <Text className="font-medium text-text-primary dark:text-dark-text-primary">
                                📱 React Query
                            </Text>
                            <Text className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                Gerenciamento de estado com Suspense
                            </Text>
                        </View>
                        <View className="bg-white dark:bg-gray-800 rounded-lg p-3">
                            <Text className="font-medium text-text-primary dark:text-dark-text-primary">
                                🎨 Formulários
                            </Text>
                            <Text className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                React Hook Form + Zod validation
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Theme Toggle */}
                <View className="items-center">
                    <Text className="text-sm mb-3 text-text-secondary dark:text-dark-text-secondary">
                        <Trans>Tema</Trans>
                    </Text>
                    <ThemeToggle />
                </View>
            </View>
        </ScrollView>
    );
}
