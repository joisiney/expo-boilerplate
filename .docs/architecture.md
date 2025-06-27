# Arquitetura do Projeto

## 🏗️ Estrutura Geral

```
expo-boilerplate/
├── src/
│   ├── app/                    # Páginas (Expo Router)
│   │   ├── _layout.tsx        # Layout principal
│   │   ├── index.tsx          # Página inicial
│   │   └── +not-found.tsx     # Página 404
│   └── __tests__/             # Configuração de testes
│       ├── setup.ts           # Setup do Jest
│       ├── utils/             # Utilitários de teste
│       └── mocks/             # Mocks organizados
├── assets/                    # Assets estáticos
├── .docs/                     # Documentação de referência
└── package.json
```

## 📱 Padrões de Componentes

### Estrutura de um Componente
```typescript
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {
  title: string;
  onPress?: () => void;
}

export default function ComponentName({ title, onPress }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Quicksand_400Regular',
  },
});
```

## 🧪 Padrão de Testes

### Estrutura de Teste
```typescript
import { render, screen } from '@testing-library/react-native';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('deve renderizar corretamente', () => {
    render(<ComponentName title="Test" />);
    expect(screen.getByText('Test')).toBeTruthy();
  });
});
```

## 🎨 Sistema de Design

### Cores Padrão
```typescript
export const colors = {
  primary: '#007AFF',
  secondary: '#0056CC', 
  background: '#f8f9fa',
  text: '#1a1a1a',
  textSecondary: '#666',
};
```

### Espaçamentos
```typescript
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};
```

## 🔧 Configurações Importantes

### Jest
- Auto-import de mocks via `utils/auto-import-modules.ts`
- Coverage em `src/__tests__/coverage/`
- Setup em `src/__tests__/setup.ts`

### Expo Router
- Navegação baseada em arquivos
- Layout principal em `_layout.tsx`
- Páginas em `src/app/` 