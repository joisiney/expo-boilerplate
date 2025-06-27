# Padrões de Testes - Expo Boilerplate

## 🧪 Padrão HocMount

### Conceito
O **HocMount** é um Higher-Order Component usado para padronizar a renderização de componentes nos testes, fornecendo uma interface consistente e flexível para passar props.

### Estrutura Obrigatória
```typescript
const HocMount = (props?: Partial<React.ComponentProps<typeof ComponentName>>): JSX.Element => {
  return <ComponentName testID="component-test" {...props} />;
};
```

### Benefícios
- **Consistência**: Todos os testes seguem o mesmo padrão
- **Flexibilidade**: Fácil passar props customizadas
- **Manutenibilidade**: Mudanças no componente refletem automaticamente nos testes
- **Type Safety**: TypeScript garante que as props estão corretas
- **TestID padrão**: Facilita a identificação em testes

## 📋 Implementação por Tipo de Componente

### Atomic Design Components (Atoms, Molecules, Organisms)
```typescript
// text.atom.spec.tsx
import { render, screen } from '@testing-library/react-native';
import { JSX } from 'react';
import { TextAtom } from './text.atom';

const HocMount = (props?: Partial<React.ComponentProps<typeof TextAtom>>): JSX.Element => {
  return <TextAtom testID="text-atom" {...props} />;
};

describe('TextAtom', () => {
  it('deve renderizar o texto corretamente', () => {
    render(<HocMount>Hello World</HocMount>);
    
    expect(screen.getByText('Hello World')).toBeTruthy();
    expect(screen.getByTestId('text-atom')).toBeTruthy();
  });

  it('deve aplicar variante heading', () => {
    render(<HocMount variant="heading">Título</HocMount>);
    
    expect(screen.getByText('Título')).toBeTruthy();
  });
});
```

### Pages (src/app/)
```typescript
// index.spec.tsx
import { render, screen } from '@testing-library/react-native';
import { JSX } from 'react';
import Index from './index';

const HocMount = (props?: Partial<React.ComponentProps<typeof Index>>): JSX.Element => {
  return <Index {...props} />;
};

describe('Página Index', () => {
  it('deve renderizar corretamente', () => {
    render(<HocMount />);
    
    expect(screen.getByText('Expo Boilerplate')).toBeTruthy();
  });
});
```

### Layouts
```typescript
// _layout.spec.tsx
import { render } from '@testing-library/react-native';
import { JSX } from 'react';
import RootLayout from './_layout';

const HocMount = (props?: Partial<React.ComponentProps<typeof RootLayout>>): JSX.Element => {
  return <RootLayout {...props} />;
};

describe('Layout Principal', () => {
  it('deve renderizar corretamente', () => {
    render(<HocMount />);
    
    expect(component).toBeTruthy();
  });
});
```

## 🎯 Regras de Uso

### TestID
- **Atomic Design**: Sempre incluir `testID` com nome descritivo
- **Pages**: Não incluir `testID` (páginas não têm essa prop)
- **Layouts**: Não incluir `testID` (layouts não têm essa prop)

### Nomenclatura TestID
- **Formato**: `component-name-type`
- **Exemplos**:
  - `text-atom`
  - `button-atom`
  - `card-molecule`
  - `header-organism`

### Props Customizadas
```typescript
// ✅ Passando props específicas
render(<HocMount variant="heading" size="large">Título</HocMount>);

// ✅ Testando estados específicos
render(<HocMount disabled>Botão Desabilitado</HocMount>);

// ✅ Passando callbacks
render(<HocMount onPress={mockFunction}>Clique aqui</HocMount>);
```

## 🔧 Padrões Avançados

### Mock de Props
```typescript
const mockProps = {
  onPress: jest.fn(),
  variant: 'primary' as const,
  disabled: false,
};

render(<HocMount {...mockProps}>Botão</HocMount>);
```

### Teste de Eventos
```typescript
import { fireEvent } from '@testing-library/react-native';

it('deve chamar onPress quando clicado', () => {
  const mockPress = jest.fn();
  render(<HocMount onPress={mockPress}>Clique</HocMount>);
  
  fireEvent.press(screen.getByTestId('button-atom'));
  expect(mockPress).toHaveBeenCalled();
});
```

### Teste de Variantes
```typescript
it.each([
  ['primary', 'bg-primary-500'],
  ['secondary', 'bg-secondary-500'],
  ['danger', 'bg-error-500'],
])('deve aplicar classe %s para variante %s', (variant, expectedClass) => {
  render(<HocMount variant={variant}>Botão</HocMount>);
  
  const button = screen.getByTestId('button-atom');
  expect(button.props.className).toContain(expectedClass);
});
```

## 📚 Estrutura de Arquivo de Teste

```typescript
// Imports obrigatórios
import { render, screen } from '@testing-library/react-native';
import { JSX } from 'react';
import { ComponentName } from './component-name.atom';

// HocMount padrão
const HocMount = (props?: Partial<React.ComponentProps<typeof ComponentName>>): JSX.Element => {
  return <ComponentName testID="component-name-atom" {...props} />;
};

// Describe principal
describe('ComponentName', () => {
  // Teste básico de renderização
  it('deve renderizar corretamente', () => {
    render(<HocMount>Conteúdo</HocMount>);
    
    expect(screen.getByText('Conteúdo')).toBeTruthy();
    expect(screen.getByTestId('component-name-atom')).toBeTruthy();
  });

  // Testes de variantes
  it('deve aplicar variante específica', () => {
    render(<HocMount variant="heading">Título</HocMount>);
    
    expect(screen.getByText('Título')).toBeTruthy();
  });

  // Testes de props
  it('deve usar valores padrão', () => {
    render(<HocMount>Padrão</HocMount>);
    
    expect(screen.getByText('Padrão')).toBeTruthy();
  });
});
```

## ✅ Checklist de Implementação

- [ ] HocMount criado com tipagem correta
- [ ] TestID incluído (apenas para Atomic Design)
- [ ] Props spread com `{...props}`
- [ ] Imports de `JSX` e `React` incluídos
- [ ] Testes básicos de renderização
- [ ] Testes de variantes (se aplicável)
- [ ] Testes de eventos (se aplicável)
- [ ] Coverage mínimo de 80% mantido

## 🚫 Anti-Padrões

### ❌ Não fazer
```typescript
// Renderização direta sem HocMount
render(<ComponentName>Texto</ComponentName>);

// HocMount sem tipagem
const HocMount = (props: any) => <ComponentName {...props} />;

// TestID em páginas
const HocMount = () => <Index testID="page" />;
```

### ✅ Fazer
```typescript
// HocMount com tipagem correta
const HocMount = (props?: Partial<React.ComponentProps<typeof ComponentName>>): JSX.Element => {
  return <ComponentName testID="component-atom" {...props} />;
};

// Uso consistente
render(<HocMount variant="primary">Conteúdo</HocMount>);
``` 