import React, {Suspense} from 'react';
import {
    View,
    ScrollView,
    ActivityIndicator,
    Alert,
    RefreshControl
} from 'react-native';
import {useSuspenseQuery} from '@tanstack/react-query';
import {router} from 'expo-router';
import {useColorScheme} from 'nativewind';
import {ButtonAtom} from '@/atoms/button';
import TextAtom from '@/atoms/text';
import {ThemeToggle} from '@/atoms/theme-toggle';
import {useAuth} from '@/core/config/auth';
import {useTheme} from '@/core/config/theme';
import {api, type Post} from '@/core/services/api';

// Componente para debug do tema
function ThemeDebug() {
    const {theme, effectiveTheme} = useTheme();
    const {colorScheme} = useColorScheme();

    return (
        <View className="border-2 border-red-500 p-4 mb-4 rounded-lg">
            <TextAtom className="text-red-600 font-bold mb-2">
                🔧 DEBUG TEMA:
            </TextAtom>
            <TextAtom className="text-black dark:text-white text-sm mb-1">
                Contexto - Configurado: {theme} | Efetivo: {effectiveTheme}
            </TextAtom>
            <TextAtom className="text-black dark:text-white text-sm mb-1">
                NativeWind colorScheme: {colorScheme}
            </TextAtom>

            {/* Teste direto de cores */}
            <View className="mt-3 space-y-2">
                <View className="bg-white dark:bg-black p-2 rounded">
                    <TextAtom className="text-black dark:text-white text-xs">
                        ✓ Fundo: branco → preto
                    </TextAtom>
                </View>
                <View className="bg-blue-100 dark:bg-blue-900 p-2 rounded">
                    <TextAtom className="text-blue-900 dark:text-blue-100 text-xs">
                        ✓ Azul claro → azul escuro
                    </TextAtom>
                </View>
                <View className="bg-gray-200 dark:bg-gray-800 p-2 rounded">
                    <TextAtom className="text-gray-800 dark:text-gray-200 text-xs">
                        ✓ Cinza claro → cinza escuro
                    </TextAtom>
                </View>
            </View>
        </View>
    );
}

// Componente para exibir dados do usuário
function UserProfile() {
    const {data: user} = useSuspenseQuery({
        queryKey: ['currentUser'],
        queryFn: api.getCurrentUser
    });

    return (
        <View className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 shadow-sm">
            <View className="flex-row items-center mb-3">
                <TextAtom className="text-4xl mr-3">{user.avatar}</TextAtom>
                <View className="flex-1">
                    <TextAtom className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                        {user.name}
                    </TextAtom>
                    <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        {user.email}
                    </TextAtom>
                </View>
            </View>
        </View>
    );
}

// Componente para exibir lista de posts
function PostsList() {
    const {data: posts} = useSuspenseQuery({
        queryKey: ['posts'],
        queryFn: api.getPosts
    });

    return (
        <View className="space-y-3">
            <TextAtom className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-3">
                Posts Recentes
            </TextAtom>
            {posts.map((post: Post) => (
                <View
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                >
                    <TextAtom className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                        {post.title}
                    </TextAtom>
                    <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
                        {post.content}
                    </TextAtom>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <TextAtom className="text-base mr-2">
                                {post.author.avatar}
                            </TextAtom>
                            <TextAtom className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                {post.author.name}
                            </TextAtom>
                        </View>
                        <TextAtom className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                            {new Date(post.createdAt).toLocaleDateString(
                                'pt-BR'
                            )}
                        </TextAtom>
                    </View>
                </View>
            ))}
        </View>
    );
}

// Loading component
function LoadingSpinner({message}: {message: string}) {
    return (
        <View className="flex-1 justify-center items-center py-8">
            <ActivityIndicator size="large" color="#3B82F6" />
            <TextAtom className="text-text-secondary dark:text-dark-text-secondary mt-3 text-center">
                {message}
            </TextAtom>
        </View>
    );
}

// Componente principal da página
export default function PrivateHomeScreen() {
    const {signOut, user} = useAuth();
    const [refreshing, setRefreshing] = React.useState(false);

    const handleSignOut = () => {
        Alert.alert('Sair', 'Tem certeza que deseja sair?', [
            {text: 'Cancelar', style: 'cancel'},
            {
                text: 'Sair',
                style: 'destructive',
                onPress: () => {
                    signOut();
                    router.replace('/');
                }
            }
        ]);
    };

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        // Simula refresh - em uma app real, você invalidaria as queries
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    return (
        <ScrollView
            className="flex-1 bg-white dark:bg-black"
            contentContainerStyle={{padding: 16}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {/* Header com Theme Toggle */}
            <View className="mb-6">
                <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-1">
                        <TextAtom className="text-2xl font-bold text-black dark:text-white mb-2">
                            Olá, {user?.name}! 👋
                        </TextAtom>
                        <TextAtom className="text-base text-gray-600 dark:text-gray-400">
                            Bem-vindo à área privada do app
                        </TextAtom>
                    </View>
                    <View className="ml-4">
                        <ThemeToggle />
                    </View>
                </View>
            </View>

            {/* Debug do Tema */}
            <ThemeDebug />

            {/* User Profile com Suspense */}
            <Suspense
                fallback={<LoadingSpinner message="Carregando perfil..." />}
            >
                <UserProfile />
            </Suspense>

            {/* Posts List com Suspense */}
            <Suspense
                fallback={<LoadingSpinner message="Carregando posts..." />}
            >
                <PostsList />
            </Suspense>

            {/* Actions */}
            <View className="mt-8 space-y-3">
                <ButtonAtom variant="outline" onPress={onRefresh}>
                    Recarregar Dados
                </ButtonAtom>
                <ButtonAtom onPress={handleSignOut} variant="outline" size="sm">
                    Sair
                </ButtonAtom>
            </View>
        </ScrollView>
    );
}
