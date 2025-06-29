import React, {Suspense} from 'react';
import {
    View,
    Text,
    ScrollView,
    ActivityIndicator,
    Alert,
    RefreshControl
} from 'react-native';
import {useSuspenseQuery} from '@tanstack/react-query';
import {router} from 'expo-router';
import {Button} from '@/atoms/button';
import {ThemeToggle} from '@/atoms/theme-toggle';
import {useAuth} from '@/core/config/auth';
import {useTheme} from '@/core/config/theme';
import {api, type Post} from '@/core/services/api';

// Componente para debug do tema
function ThemeDebug() {
    const {theme, effectiveTheme} = useTheme();

    return (
        <View className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mb-4 border border-blue-300 dark:border-blue-700">
            <Text className="text-blue-800 dark:text-blue-200 font-medium text-sm">
                🔧 Debug Tema:
            </Text>
            <Text className="text-blue-700 dark:text-blue-300 text-xs">
                Configurado: {theme} | Ativo: {effectiveTheme}
            </Text>
            <View className="mt-2 p-2 bg-white dark:bg-gray-800 rounded">
                <Text className="text-gray-900 dark:text-gray-100 text-xs">
                    Este texto deve mudar de cor conforme o tema
                </Text>
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
                <Text className="text-4xl mr-3">{user.avatar}</Text>
                <View className="flex-1">
                    <Text className="text-lg font-semibold text-text-primary dark:text-dark-text-primary">
                        {user.name}
                    </Text>
                    <Text className="text-sm text-text-secondary dark:text-dark-text-secondary">
                        {user.email}
                    </Text>
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
            <Text className="text-xl font-bold text-text-primary dark:text-dark-text-primary mb-3">
                Posts Recentes
            </Text>
            {posts.map((post: Post) => (
                <View
                    key={post.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                >
                    <Text className="text-lg font-semibold text-text-primary dark:text-dark-text-primary mb-2">
                        {post.title}
                    </Text>
                    <Text className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
                        {post.content}
                    </Text>
                    <View className="flex-row items-center justify-between">
                        <View className="flex-row items-center">
                            <Text className="text-base mr-2">
                                {post.author.avatar}
                            </Text>
                            <Text className="text-sm text-text-secondary dark:text-dark-text-secondary">
                                {post.author.name}
                            </Text>
                        </View>
                        <Text className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                            {new Date(post.createdAt).toLocaleDateString(
                                'pt-BR'
                            )}
                        </Text>
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
            <Text className="text-text-secondary dark:text-dark-text-secondary mt-3 text-center">
                {message}
            </Text>
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
            className="flex-1 bg-background-primary dark:bg-dark-background-primary"
            contentContainerStyle={{padding: 16}}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            {/* Header com Theme Toggle */}
            <View className="mb-6">
                <View className="flex-row items-center justify-between mb-4">
                    <View className="flex-1">
                        <Text className="text-2xl font-bold text-text-primary dark:text-dark-text-primary mb-2">
                            Olá, {user?.name}! 👋
                        </Text>
                        <Text className="text-base text-text-secondary dark:text-dark-text-secondary">
                            Bem-vindo à área privada do app
                        </Text>
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
                <Button
                    title="Recarregar Dados"
                    variant="outline"
                    onPress={onRefresh}
                />
                <Button
                    title="Sair"
                    variant="destructive"
                    onPress={handleSignOut}
                />
            </View>
        </ScrollView>
    );
}
