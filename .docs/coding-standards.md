# Padrões de Código - Expo Boilerplate

## 📋 Regras Gerais

### Estrutura de Arquivos
- Máximo 200-300 linhas por arquivo
- Um componente por arquivo
- **Nomes sempre em dash-case** (kebab-case)
- **Sempre usar sufixos** quando aplicável (.mock, .atom, .molecule, etc.)
- Evitar duplicação de código

### Nomenclatura de Arquivos
- **dash-case obrigatório**: `user-profile.tsx`, `api-client.ts`
- **Sufixos obrigatórios**: `.mock`, `.atom`, `.molecule`, `.organism`, `.particle`, `.feature`
- **Exemplos**:
  - `user-service.mock.ts`
  - `button.atom.tsx`
  - `form-card.molecule.tsx`
  - `header.organism.tsx`

### Comentários
- **NUNCA colocar comentários no código**
- Código deve ser auto-explicativo
- Usar nomes descritivos para variáveis e funções
- Se precisa de comentário, refatorar o código

### Testes
- Todo componente deve ter teste (.spec.tsx)
- Mocks organizados em `src/__tests__/mocks/modules/`
- Coverage mínimo de 80%
- Usar Testing Library para testes de componentes

### Fontes
- Usar `@expo-google-fonts/quicksand`
- Fontes disponíveis:
  - `Quicksand_400Regular` (padrão)
  - `Quicksand_500Medium`
  - `Quicksand_700Bold`

### Imports
- Sempre usar imports ES6
- Evitar `require()` exceto em casos específicos
- Organizar imports: React → bibliotecas → arquivos locais
- **NUNCA importar React**: JSX Transform automático configurado
- **Para types React**: `import { ReactNode } from 'react'`

### Exports e Functions
- **src/app/**: `export default` + `function` permitidos
- **Atomic Design**: `export const` + arrow functions obrigatório
- **Exemplos**:
  ```typescript
  // ✅ src/app/index.tsx
  export default function HomePage() { ... }
  
  // ✅ src/atoms/text/text.atom.tsx
  export const TextAtom = ({ children }: NText.Props) => { ... }
  ```

### TypeScript
- Sempre tipar adequadamente
- Evitar `any`
- Usar interfaces para objetos complexos
- Preferir `type` para unions simples
- **Types sempre em namespace prefixado com N**
- **Arquivo separado com sufixo .types.ts**

### Namespaces de Types
- **Prefixo obrigatório N**: `NButton`, `NUser`, `NApi`
- **Exemplos**:
  ```typescript
  // button.types.ts
  export namespace NButton {
    export interface Props {
      title: string;
      onPress: () => void;
    }
    
    export type Variant = 'primary' | 'secondary';
  }
  ```

### Estilo
- StyleSheet.create() para estilos
- Cores em variáveis/constantes
- Usar Flexbox para layouts
- Responsividade mobile-first

### Mocks
- Um mock por arquivo em `modules/`
- Nomenclatura: `nome-do-modulo.mock.ts`
- Auto-importados via `auto-import-modules.ts`
- Sempre mockar módulos externos nos testes

## 🏗️ Atomic Design

### Estrutura de Pastas Obrigatória
```
src/
├── atoms/
├── molecules/
├── organisms/
├── particles/
└── features/
```

### Estrutura de Componente (Exemplo: Button Atom)
```
src/atoms/button/
├── button.atom.tsx      # Componente principal
├── button.types.ts      # Types em namespace NButton
└── index.ts             # Entry point
```

### Entry Point (index.ts)
```typescript
export { ButtonAtom as default } from './button.atom';
export * from './button.types';
```

### Arquivo de Types (.types.ts)
```typescript
export namespace NButton {
  export interface Props {
    title: string;
    variant?: Variant;
    onPress: () => void;
  }
  
  export type Variant = 'primary' | 'secondary' | 'danger';
}
```

### Arquivo do Componente (.atom.tsx)
```typescript
import { TouchableOpacity, Text } from 'react-native';
import { NButton } from './button.types';

export const ButtonAtom = ({ title, variant = 'primary', onPress }: NButton.Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
``` 