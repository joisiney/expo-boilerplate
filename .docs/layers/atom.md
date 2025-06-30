# 🧬 Átomos

Átomos são os **menores blocos de construção da interface** do usuário, projetados para serem **reutilizáveis**, **simples** e **independentes**. Eles representam elementos básicos como botões, ícones, inputs ou divisores, sem lógica complexa ou dependências externas.

---

### 🔹 Estrutura `src/atoms/{name}`

- **Sufixo**: `.atom.tsx`
- **Exemplo**: `button.atom.tsx` com `ButtonAtom`
- **Arquivos permitidos**:
    - `index.ts`
    - `{name}.atom.tsx`
    - `{name}.type.ts`
    - `{name}.constant.ts` // Opcional
    - `{name}.variant.ts` // Opcional
    - `{name}.mock.ts` // Opcional
    - `{name}.stories.tsx`
    - `{name}.spec.ts`

> ✅ Todos os tipos devem estar agrupados na `namespace` no arquivo `.type.ts`

---

## 📄 Exemplo `index.ts`

```ts
export * from './button.atom';
export * from './button.type';
export * from './button.constant'; // Opcional
export * from './button.mock'; // Opcional
```

---

## 📄 Exemplo `button.type.ts`

```ts
import type {VariantProps} from 'class-variance-authority';
import {buttonVariant} from './button.variant'; // Opcional

export namespace NButtonAtom {
    export type Dto = {
        id: string;
        label: string;
        intent: 'primary' | 'secondary';
    };

    export type Props = TWithTestID & VariantProps<typeof buttonVariant>; // Opcional

    export type ButtonType = keyof typeof BUTTON; // Opcional (se usar .constant.ts)
}
```

---

## 📄 Exemplo `button.constant.ts` // Opcional

```ts
export const BUTTON = {
    PRIMARY: 'primary',
    SECONTARY: 'secondary'
} as const;
```

> ✅ Use `as const`, prefira nomes UPPER_CASE, e exporte objetos nomeados.

---

## 📄 Exemplo `button.variant.ts` // Opcional

```ts
import {cva} from 'class-variance-authority';

export const buttonVariant = cva('px-4 py-2 text-sm rounded', {
    variants: {
        intent: {
            primary: 'bg-blue-500 text-white',
            secondary: 'bg-gray-200 text-black'
        },
        size: {
            sm: 'text-xs',
            md: 'text-sm',
            lg: 'text-lg'
        }
    },
    defaultVariants: {
        intent: 'primary',
        size: 'md'
    }
});
```

> ❌ **NUNCA** exportar `variant.ts`, `stories.tsx` e `spec.ts` no `index.ts`.

**REGRA IMPORTANTE:** Atoms **NUNCA** devem exportar `variant.ts`, `stories.tsx` e `spec.ts` no `index.ts`. Estes arquivos são apenas para desenvolvimento e testes.

---

## 📄 Exemplo `button.atom.tsx`

```ts
import {FC} from 'react';
import {View} from 'react-native';
import {NButtonAtom} from './button.type';
import {buttonVariant} from './button.variant'; // Opcional

export const ButtonAtom: FC<NButtonAtom.Props> = ({testID, intent, size}) => {
  return (
    <View
      testID={`${testID}-atom`}
      className={buttonVariant({intent, size})}
    />
  );
};
```

---

## 📄 Exemplo `button.stories.tsx`

```tsx
import {Meta, StoryObj} from '@storybook/react';
import {ButtonAtom} from './button.atom';
import {mockButtonDto} from './button.mock';

const meta: Meta = {
    title: 'Atoms/Button',
    component: ButtonAtom
};

export default meta;

export const Default: StoryObj = {
    args: mockButtonDto()
};
```

> ✅ Toda story deve usar os mocks como base para seus `args`
> ❌ Nunca exportar `stories.tsx` no `index.ts`.

---

## 📄 Exemplo `button.spec.ts`

```ts
const HocMount = (props?: Partial<React.ComponentProps<typeof ButtonAtom>>): JSX.Element => {
  return <ButtonAtom testID="button-atom" {...Default.args, ...props} />;
};

import {render, screen} from '@testing-library/react-native';
import {ButtonAtom} from './button.atom';
import {Default} from './button.stories';

describe('Atom: <ButtonAtom />', () => {
  it('deve renderizar corretamente', () => {
    render(<HocMount />);
    const sut = screen.getByTestId('button-atom');
    expect(sut).toBeTruthy();
  });

  it('não deve renderizar corretamente se testID for omitido', () => {
    render(<HocMount testID={undefined} />);
    const sut = screen.queryByTestId('button-atom');
    expect(sut).toBeNull();
  });
});
```

> ✅ Testes unitários devem usar a **story como fonte de verdade**
> ✅ O `mock` é utilizado pela story e reutilizado pelo teste
> ❌ Nunca exportar `spec.ts` no `index.ts`.

---

## 📄 Exemplo `button.mock.ts` // Opcional

```ts
import {faker} from '@faker-js/faker';
import type {NButtonAtom} from './button.type';

export const mockButtonDto = (
    override?: Partial<NButtonAtom.Dto>
): NButtonAtom.Dto => ({
    id: faker.string.uuid(),
    label: faker.lorem.word(),
    intent: 'primary',
    ...override
});

export const mockButtonDtos = (
    count = 3,
    override?: Partial<NButtonAtom.Dto>
): NButtonAtom.Dto[] =>
    Array.from({length: count}, () => mockButtonDto(override));

export const mockButtonSectionDtos = (
    count = 2,
    override?: Partial<NButtonAtom.Dto>
): {title: string; data: NButtonAtom.Dto[]}[] =>
    Array.from({length: count}, (_, index) => ({
        title: `Seção ${index + 1}`,
        data: mockButtonDtos(3, override)
    }));
```

> ✅ `mockButtonDto` é **obrigatório**
> ✅ `mockButtonDtos` e `mockButtonSectionDtos` são **gerados dinamicamente**

---

## 🔧 CLI Khaos

### Modo Interativo

Quando executado sem parâmetros completos, o CLI guia através de perguntas:

```bash
khaos create atom
? Qual é o nome do átomo? Button
? Tipo do átomo: Component, Constant, Type ou Util? component
? Incluir arquivos de teste? sim
? Adicionar Storybook stories? sim
? Usar styled-components? não
? Incluir arquivo de constantes? sim
? Incluir arquivo de variantes (CVA)? sim
? Incluir arquivo de mock? sim
✅ Átomo Button criado com sucesso!
```

**Fluxo de Perguntas:**

1. **Nome do átomo**: Nome do componente (ex: `Button`, `Input`, `Icon`)
2. **Tipo do átomo**: `component`, `constant`, `type`, ou `util`
3. **Arquivos de teste**: Se deve incluir `.spec.tsx`
4. **Storybook stories**: Se deve incluir `.stories.tsx`
5. **Styling**: Styled-components, CSS modules, ou Tailwind
6. **Arquivo de constantes**: Se deve incluir `.constant.ts`
7. **Arquivo de variantes**: Se deve incluir `.variant.ts` (CVA)
8. **Arquivo de mock**: Se deve incluir `.mock.ts`

### Modo Linha de Comando

Para usuários avançados que preferem comandos completos:

```bash
# Átomo componente simples
khaos create atom Button --type=component

# Átomo com todas as opções
khaos create atom Button --type=component --with-tests --with-stories --with-constants --with-variants --with-mocks

# Outros comandos
khaos update atom
khaos check atom
khaos delete atom
```

### Exemplos Comparativos

**Modo Interativo:**

```bash
khaos create atom
? Qual é o nome do átomo? Input
? Tipo do átomo: Component, Constant, Type ou Util? component
? Incluir arquivos de teste? sim
? Adicionar Storybook stories? não
? Incluir arquivo de constantes? não
? Incluir arquivo de variantes (CVA)? sim
? Incluir arquivo de mock? sim
```

**Equivalente em Linha de Comando:**

```bash
khaos create atom Input --type=component --with-tests --with-variants --with-mocks
```

---

### ✨ Criar Átomo

1. **Informar o propósito**: Através do modo interativo ou flags
2. **Nome do átomo**: Perguntado interativamente ou passado como parâmetro
3. **Selecionar camadas opcionais**:
    - `.constant.ts` // Opcional
    - `.variant.ts` // Opcional
    - `.mock.ts` com ou sem `Dtos` e `SectionDtos` // Opcional
4. **Estrutura sugerida**:

    ```text
    src/atoms/
    ├── button/
    │   ├── index.ts
    │   ├── button.atom.tsx
    │   ├── button.type.ts
    │   ├── button.constant.ts // Opcional
    │   ├── button.variant.ts // Opcional
    │   ├── button.mock.ts // Opcional
    │   ├── button.stories.tsx
    │   └── button.spec.ts
    ```

5. **Commit automático**:

    ```bash
    ✨ feat(atom): estrutura base de `button` (wip)
    ```

### Tipos de Átomo Disponíveis

#### Component

Componente React reutilizável:

```bash
khaos create atom
? Tipo do átomo: Component, Constant, Type ou Util? component
```

#### Constant

Constantes e configurações:

```bash
khaos create atom
? Tipo do átomo: Component, Constant, Type ou Util? constant
```

#### Type

Definições de tipos TypeScript:

```bash
khaos create atom
? Tipo do átomo: Component, Constant, Type ou Util? type
```

#### Util

Funções utilitárias:

```bash
khaos create atom
? Tipo do átomo: Component, Constant, Type ou Util? util
```

---

### ♻️ Atualizar Átomo

```bash
♻️ refactor(atom): renomear `button` para `icon-button`
```

---

### ✅ Validar Átomo

```bash
khaos check atom
```

```text
Check dos Átomos:
- button: ✅ Válido
- icon: ❌ Erro: Props sem testID
- divider: ❌ Erro: index.ts exporta variant.ts
Resumo: 1/3 átomos válidos
```

---

### 🗑️ Remover Átomo

```bash
🗑️ chore(atom): remover átomo `button`
```

---

## 🔧 Composition Root

Atoms **podem fazer** composition root quando necessário para configurar dependências internas do componente.

```typescript
// ✅ Permitido - composition root em atom
const ButtonAtom: React.FC<ButtonProps> = (props) => {
  const analytics = useAnalytics(); // composition root
  const theme = useTheme();         // composition root

  return <button {...props} />;
};
```

---

## � Boas Práticas

- [Convenções Gerais](../general-conventions.md)
- [Validação Hermes](../validator.md)
- [Estrutura do Projeto](../project-structure.md)
- [Code Smells](../code-smells.md)
- [Início Rápido](../quick-start.md)

---

## ➡️ Próxima Camada

- [Moléculas](./molecule.md)
