// Mock API service para demonstrar React Query
export interface User {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface Post {
    id: string;
    title: string;
    content: string;
    author: User;
    createdAt: string;
}

// Simula delay de rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock de dados
const mockUsers: User[] = [
    {
        id: '1',
        name: 'João Silva',
        email: 'joao@example.com',
        avatar: '👨‍💻'
    },
    {
        id: '2',
        name: 'Maria Santos',
        email: 'maria@example.com',
        avatar: '👩‍🎨'
    },
    {
        id: '3',
        name: 'Pedro Costa',
        email: 'pedro@example.com',
        avatar: '👨‍🚀'
    }
];

const mockPosts: Post[] = [
    {
        id: '1',
        title: 'Introdução ao React Native',
        content:
            'React Native é uma framework incrível para desenvolvimento mobile...',
        author: mockUsers[0],
        createdAt: '2024-01-15T10:30:00Z'
    },
    {
        id: '2',
        title: 'Configurando Expo Router',
        content: 'O Expo Router simplifica a navegação em apps React Native...',
        author: mockUsers[1],
        createdAt: '2024-01-14T15:45:00Z'
    },
    {
        id: '3',
        title: 'Usando React Query',
        content:
            'React Query facilita o gerenciamento de estado do servidor...',
        author: mockUsers[2],
        createdAt: '2024-01-13T09:20:00Z'
    }
];

// API functions
export const api = {
    // Buscar usuário atual
    getCurrentUser: async (): Promise<User> => {
        await delay(800);
        return mockUsers[0];
    },

    // Buscar todos os posts
    getPosts: async (): Promise<Post[]> => {
        await delay(1200);
        return mockPosts;
    },

    // Buscar post por ID
    getPost: async (id: string): Promise<Post> => {
        await delay(600);
        const post = mockPosts.find((p) => p.id === id);
        if (!post) {
            throw new Error('Post não encontrado');
        }
        return post;
    },

    // Buscar usuários
    getUsers: async (): Promise<User[]> => {
        await delay(900);
        return mockUsers;
    }
};
