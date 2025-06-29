import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// Configuração otimizada do QueryClient
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutos
            gcTime: 10 * 60 * 1000, // 10 minutos (cacheTime renomeado para gcTime)
            retry: (failureCount, error: any) => {
                // Não tenta novamente para erros 401/403
                if (error?.status === 401 || error?.status === 403) {
                    return false;
                }
                return failureCount < 3;
            }
        },
        mutations: {
            retry: false
        }
    }
});

interface ReactQueryProviderProps {
    children: React.ReactNode;
}

export function ReactQueryProvider({children}: ReactQueryProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}
