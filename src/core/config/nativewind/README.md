# NativeWind Configuration

Este diretório contém toda a configuração do NativeWind (Tailwind CSS para React Native) do projeto.

## Estrutura de Arquivos

```
src/core/config/nativewind/
├── README.md                 # Este arquivo
├── tailwind.config.js        # Configuração principal do Tailwind
├── colors.ts                 # Paleta de cores customizada
├── font-family.ts            # Configuração de fontes
├── font-size.ts              # Tamanhos de fonte
├── global.css                # Estilos globais CSS
└── index.ts                  # Exportações principais
```

## Como Usar

### 1. Classes Básicas

```tsx
import { View, Text } from 'react-native';

export const MyComponent = () => (
  <View className="flex-1 bg-white p-4">
    <Text className="text-xl font-sans-bold text-primary-500">
      Título
    </Text>
    <Text className="text-base font-sans text-text-secondary">
      Descrição
    </Text>
  </View>
);
```

### 2. Cores Customizadas

```tsx
// Cores primárias
className="bg-primary-500 text-white"

// Cores de texto
className="text-text-primary"     // #212121
className="text-text-secondary"   // #757575
className="text-text-tertiary"    // #9E9E9E

// Cores de fundo
className="bg-background-primary"    // #FFFFFF
className="bg-background-secondary"  // #F8F9FA
```

### 3. Tipografia

```tsx
// Fontes
className="font-sans"         // Quicksand Regular
className="font-sans-medium"  // Quicksand Medium
className="font-sans-bold"    // Quicksand Bold

// Tamanhos
className="text-xs"    // 12px
className="text-sm"    // 14px
className="text-base"  // 16px
className="text-lg"    // 18px
className="text-xl"    // 20px
className="text-2xl"   // 24px
// ... até text-9xl
```

### 4. Usando o TextAtom

Para textos reutilizáveis, use o componente `TextAtom` disponível em `@/atoms/text`:

```tsx
import { TextAtom } from '@/atoms/text';

export const ExampleScreen = () => (
  <View className="flex-1 p-4">
    <TextAtom variant="heading" size="large">
      Título Principal
    </TextAtom>
    
    <TextAtom variant="body">
      Texto do corpo da aplicação
    </TextAtom>
    
    <TextAtom variant="caption" size="small">
      Texto de legenda ou informação adicional
    </TextAtom>
  </View>
);
```

### 5. Espaçamento e Layout

```tsx
// Padding
className="p-4"     // padding: 16px
className="px-4"    // padding horizontal: 16px
className="py-2"    // padding vertical: 8px

// Margin
className="m-4"     // margin: 16px
className="mb-2"    // margin bottom: 8px
className="mt-4"    // margin top: 16px

// Flexbox
className="flex-1"              // flex: 1
className="flex-row"            // flexDirection: row
className="items-center"        // alignItems: center
className="justify-center"      // justifyContent: center
className="justify-between"     // justifyContent: space-between
```

## Configuração Personalizada

### Adicionando Novas Cores

Edite `colors.ts`:

```typescript
export const colors = {
  // ... cores existentes
  custom: {
    500: '#YOUR_COLOR',
  },
} as const;
```

### Adicionando Novos Tamanhos de Fonte

Edite `font-size.ts`:

```typescript
export const fontSize = {
  // ... tamanhos existentes
  'custom-size': ['18px', { lineHeight: '24px' }],
} as const;
```

## Classes Utilitárias Customizadas

O arquivo `global.css` contém classes utilitárias específicas para React Native:

```css
/* Safe Area */
.safe-area-top    { padding-top: env(safe-area-inset-top); }
.safe-area-bottom { padding-bottom: env(safe-area-inset-bottom); }

/* Componentes */
.btn-primary      { /* Estilo de botão primário */ }
.card             { /* Estilo de card */ }
.input-field      { /* Estilo de campo de input */ }
```

## Dicas de Uso

1. **Sempre use as classes de cor customizadas** em vez de cores hardcoded
2. **Use as fontes configuradas** (`font-sans`, `font-sans-medium`, `font-sans-bold`)
3. **Use o TextAtom** para textos reutilizáveis e consistência visual
4. **Teste em diferentes dispositivos** para garantir que os estilos funcionem corretamente
5. **Use className em vez de style** sempre que possível para melhor performance

## Troubleshooting

### Classes não funcionam
- Verifique se o arquivo `global.css` está sendo importado no `_layout.tsx`
- Confirme se o `metro.config.js` está configurado corretamente
- Reinicie o servidor de desenvolvimento

### Tipos TypeScript
- Certifique-se de que `nativewind-env.d.ts` está incluído no `tsconfig.json`
- Reinicie o TypeScript server no seu editor

### Performance
- Use `className` em vez de `style` sempre que possível
- Evite classes dinâmicas complexas em componentes que re-renderizam frequentemente 