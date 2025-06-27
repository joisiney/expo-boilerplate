# Arquitetura do Projeto

## 🏗️ Estrutura Geral

```
expo-boilerplate/
├── src/
│   ├── @types/                 # Tipos globais TypeScript
│   │   └── standards.d.ts      # TWithTestID e outros padrões
│   ├── app/                    # Páginas (Expo Router)
│   │   ├── _layout.tsx        # Layout principal
│   │   ├── index.tsx          # Página inicial
│   │   └── +not-found.tsx     # Página 404
│   ├── atoms/                  # Componentes atômicos
│   │   └── text/
│   │       ├── text.atom.tsx
│   │       ├── text.types.ts
│   │       ├── text.variant.ts
│   │       └── index.ts
│   ├── molecules/              # Componentes moleculares
│   ├── organisms/              # Componentes organismos
│   ├── particles/              # Componentes partículas
│   ├── features/               # Features completas
│   ├── core/                   # Configurações centrais
│   │   └── config/
│   │       └── nativewind/     # Configuração NativeWind
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
// text.types.ts
export namespace NText {
  export interface Props extends TWithTestID {
    variant?: Variant;
    size?: Size;
    className?: string;
  }
  
  export type Variant = 'body' | 'heading' | 'caption' | 'label';
  export type Size = 'small' | 'medium' | 'large' | 'xlarge';
}

// text.variant.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const textVariant = cva('font-sans text-text-primary', {
  variants: {
    variant: {
      body: 'font-sans text-base',
      heading: 'font-sans-bold text-lg',
      caption: 'font-sans text-sm text-text-secondary opacity-70',
      label: 'font-sans-medium text-base',
    },
    size: {
      small: 'text-xs',
      medium: 'text-base',
      large: 'text-xl',
      xlarge: 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'body',
    size: 'medium',
  },
});

export type TextVariantProps = VariantProps<typeof textVariant>;

// text.atom.tsx
import { FC, PropsWithChildren } from 'react';
import { Text } from 'react-native';
import { NText } from './text.types';
import { getTextClasses } from './text.variant';

export const TextAtom: FC<PropsWithChildren<NText.Props>> = ({ 
  children, 
  variant = 'body', 
  size = 'medium',
  className = '',
  testID,
  ...props
}) => {
  const classes = getTextClasses(variant, size, className);

  return (
    <Text 
      className={classes}
      testID={testID}
      {...props}
    >
      {children}
    </Text>
  );
};

// index.ts
export { TextAtom as default } from './text.atom';
export * from './text.types';
```

## 🧪 Padrão de Testes

### Estrutura de Teste
```typescript
import { render, screen } from '@testing-library/react-native';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  it('deve renderizar corretamente', () => {
    render(<ComponentName testID="component-test">Test</ComponentName>);
    expect(screen.getByTestId('component-test')).toBeTruthy();
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

### TypeScript Global Types
- Pasta `src/@types/` para tipos globais
- Configuração automática via `tsconfig.json` typeRoots
- `TWithTestID` obrigatório em todos os componentes

### Jest
- Auto-import de mocks via `utils/auto-import-modules.ts`
- Coverage em `src/__tests__/coverage/`
- Setup em `src/__tests__/setup.ts`

### Expo Router
- Navegação baseada em arquivos
- Layout principal em `_layout.tsx`
- Páginas em `src/app/`

### NativeWind
- Configuração em `src/core/config/nativewind/`
- Class Variance Authority para variantes
- Fonte padrão Quicksand configurada globalmente 