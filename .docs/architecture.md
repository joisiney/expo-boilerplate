# Arquitetura do Projeto

## 🏗️ Estrutura Geral

```
expo-boilerplate/
├── src/
│   ├── app/                    # Páginas (Expo Router)
│   │   ├── _layout.tsx        # Layout principal
│   │   ├── index.tsx          # Página inicial
│   │   └── +not-found.tsx     # Página 404
│   ├── atoms/                  # Componentes atômicos
│   │   └── button/
│   │       ├── button.atom.tsx
│   │       ├── button.types.ts
│   │       └── index.ts
│   ├── molecules/              # Componentes moleculares
│   ├── organisms/              # Componentes organismos
│   ├── particles/              # Componentes partículas
│   ├── features/               # Features completas
│   └── __tests__/             # Configuração de testes
│       ├── setup.ts           # Setup do Jest
│       ├── utils/             # Utilitários de teste
│       └── mocks/             # Mocks organizados
├── assets/                    # Assets estáticos
├── .docs/                     # Documentação de referência
└── package.json
```

## 📱 Padrões de Componentes (Atomic Design)

### Estrutura de um Atom
```typescript
// button.types.ts
export namespace NButton {
  export interface Props {
    title: string;
    variant?: Variant;
    onPress: () => void;
  }
  
  export type Variant = 'primary' | 'secondary';
}

// button.atom.tsx
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NButton } from './button.types';

export const ButtonAtom = ({ title, variant = 'primary', onPress }: NButton.Props) => {
  return (
    <TouchableOpacity style={[styles.container, styles[variant]]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
  },
  primary: {
    backgroundColor: '#007AFF',
  },
  secondary: {
    backgroundColor: '#6C757D',
  },
  title: {
    fontFamily: 'Quicksand_400Regular',
    color: 'white',
  },
});

// index.ts
export { ButtonAtom as default } from './button.atom';
export * from './button.types';
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