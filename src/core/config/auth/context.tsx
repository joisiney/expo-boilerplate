import React, {createContext, useContext, useEffect, useState} from 'react';
import {MMKV} from 'react-native-mmkv';

// Configuração do MMKV para persistência
const storage = new MMKV({
    id: 'auth-storage',
    encryptionKey: 'expo-boilerplate-auth-key'
});

// Tipos
interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

// Contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider
export function AuthProvider({children}: {children: React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Carrega dados do usuário do storage ao inicializar
    useEffect(() => {
        const loadUser = () => {
            try {
                const userData = storage.getString('user');
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (error) {
                console.error('Erro ao carregar dados do usuário:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadUser();
    }, []);

    const signIn = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            // Simula chamada para API
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Mock de validação - aceita qualquer email/senha
            if (email && password) {
                const userData: User = {
                    id: '1',
                    email,
                    name: email.split('@')[0]
                };

                // Salva no storage
                storage.set('user', JSON.stringify(userData));
                setUser(userData);
            } else {
                throw new Error('Email e senha são obrigatórios');
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const signOut = () => {
        storage.delete('user');
        setUser(null);
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}

// Hook para usar o contexto
export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}
