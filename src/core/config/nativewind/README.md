# Configuração do NativeWind

## Como Funciona

O NativeWind está configurado para funcionar automaticamente através do Metro bundler. **NÃO** é necessário importar o CSS global diretamente no código.

### Configuração Atual

1. **Metro Config** (`metro.config.js`):
   - Processa o CSS global através do `withNativeWind`
   - Input: `./src/core/config/nativewind/global.css`
   - Config: `./tailwind.config.js`

2. **Babel Config** (`babel.config.js`):
   - Preset: `babel-preset-expo` com `jsxImportSource: 'nativewind'`
   - Plugin: `nativewind/babel`

3. **Tailwind Config** (`tailwind.config.js`):
   - Conteúdo: `./src/**/*.{js,jsx,ts,tsx}` e `./app/**/*.{js,jsx,ts,tsx}`
   - Cores, fontes e tamanhos customizados

### ⚠️ Importante

**NUNCA** importe o CSS global diretamente no código:

```tsx
// ❌ INCORRETO - Vai quebrar a aplicação
import '../src/core/config/nativewind/global.css';
```

O NativeWind é processado automaticamente pelo Metro. Simplesmente use as classes:

```tsx
// ✅ CORRETO
<View className="flex-1 bg-background-primary p-4">
  <Text className="text-xl font-sans-bold text-text-primary">
    Hello World
  </Text>
</View>
```

### Estrutura de Cores

- **Primary**: Cores principais do app
- **Secondary**: Cores secundárias
- **Success/Warning/Error**: Estados de feedback
- **Background**: Fundos (primary, secondary, tertiary)
- **Text**: Textos (primary, secondary, tertiary, inverse)
- **Border**: Bordas (light, medium, dark)

### Fontes Disponíveis

- `font-sans`: Quicksand Regular (400)
- `font-sans-medium`: Quicksand Medium (500)
- `font-sans-bold`: Quicksand Bold (700)

### Tamanhos de Fonte

- Padrão: `xs`, `sm`, `base`, `lg`, `xl`, `2xl` até `9xl`
- Semânticos: `caption`, `body`, `subtitle`, `title`, `headline`, `display`

## Testando

Para testar se está funcionando, use qualquer classe do Tailwind:

```tsx
<Text className="text-primary-500 font-sans-bold">
  Se você vê esta cor azul, o NativeWind está funcionando!
</Text>
``` 