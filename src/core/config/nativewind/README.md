# NativeWind Configuration

Este diretório contém as configurações do NativeWind (Tailwind CSS para React Native).

## 📁 Estrutura

- `colors.js` - Paleta de cores completa (light + dark mode)
- `font-family.js` - Configurações de fontes
- `font-size.js` - Tamanhos de fonte
- `global.css` - Estilos globais e componentes
- `index.ts` - Exportações principais

## 🎨 Sistema de Cores

### Cores Principais

```js
// Cores do sistema
primary: { 50: '#E3F2FD', ..., 900: '#002952' }
secondary: { 50: '#F5F5F5', ..., 900: '#212121' }
success: { 50: '#E8F5E8', ..., 900: '#1B5E20' }
warning: { 50: '#FFF8E1', ..., 900: '#FF6F00' }
error: { 50: '#FFEBEE', ..., 900: '#B71C1C' }
```

### Cores Semânticas (Light Mode)

```js
background: {
  primary: '#FFFFFF',    // Fundo principal
  secondary: '#F8F9FA',  // Fundo secundário
  tertiary: '#F1F3F4'    // Fundo terciário
}

text: {
  primary: '#212121',    // Texto principal
  secondary: '#757575',  // Texto secundário
  tertiary: '#9E9E9E',   // Texto terciário
  inverse: '#FFFFFF'     // Texto inverso
}

border: {
  light: '#E0E0E0',      // Borda clara
  medium: '#BDBDBD',     // Borda média
  dark: '#757575'        // Borda escura
}

surface: {
  primary: '#FFFFFF',    // Superfície principal
  secondary: '#F5F5F5',  // Superfície secundária
  elevated: '#FFFFFF'    // Superfície elevada
}
```

### Cores Semânticas (Dark Mode)

```js
dark: {
  background: {
    primary: '#121212',   // Fundo principal escuro
    secondary: '#1E1E1E', // Fundo secundário escuro
    tertiary: '#2D2D2D'   // Fundo terciário escuro
  },

  text: {
    primary: '#FFFFFF',   // Texto principal claro
    secondary: '#B3B3B3', // Texto secundário claro
    tertiary: '#8A8A8A',  // Texto terciário claro
    inverse: '#000000'    // Texto inverso escuro
  },

  border: {
    light: '#404040',     // Borda clara escura
    medium: '#666666',    // Borda média escura
    dark: '#8A8A8A'       // Borda escura
  },

  surface: {
    primary: '#1E1E1E',   // Superfície principal escura
    secondary: '#2D2D2D', // Superfície secundária escura
    elevated: '#333333'   // Superfície elevada escura
  }
}
```

## 🚀 Como Usar

### Classes Básicas

```tsx
// Fundos
className = 'bg-background-primary dark:bg-dark-background-primary';
className = 'bg-surface-secondary dark:bg-dark-surface-secondary';

// Textos
className = 'text-text-primary dark:text-dark-text-primary';
className = 'text-text-secondary dark:text-dark-text-secondary';

// Bordas
className = 'border-border-light dark:border-dark-border-light';
```

### Componentes com Tema

```tsx
import {ThemedView} from '@/core/config/theme';

function MyComponent() {
    return (
        <ThemedView className="bg-background-primary dark:bg-dark-background-primary">
            <Text className="text-text-primary dark:text-dark-text-primary">
                Conteúdo que responde ao tema
            </Text>
        </ThemedView>
    );
}
```

### Botões Temáticos

```tsx
// Botão primário
<TouchableOpacity className="bg-primary-500 px-4 py-2 rounded-lg">
  <Text className="text-white font-medium">Botão Primário</Text>
</TouchableOpacity>

// Botão com tema
<TouchableOpacity className="bg-surface-secondary dark:bg-dark-surface-secondary border border-border-light dark:border-dark-border-light px-4 py-2 rounded-lg">
  <Text className="text-text-primary dark:text-dark-text-primary font-medium">
    Botão Temático
  </Text>
</TouchableOpacity>
```

## ⚠️ Regras Importantes

1. **NUNCA** use cores hardcoded no código (ex: `#FFFFFF`, `#000000`)
2. **SEMPRE** use as classes do sistema de cores
3. **SEMPRE** inclua a variante dark: `dark:bg-dark-*`
4. **EDITE** apenas o arquivo `colors.js` para alterar cores
5. **USE** o `ThemedView` como container principal

## 🔧 Adicionando Novas Cores

Para adicionar novas cores, edite apenas o arquivo `colors.js`:

```js
// Em colors.js
const colors = {
    // ... cores existentes

    // Nova cor personalizada
    custom: {
        primary: '#FF5722',
        secondary: '#FFC107'
    },

    // Versão dark da nova cor
    dark: {
        // ... cores dark existentes
        custom: {
            primary: '#D84315',
            secondary: '#FF8F00'
        }
    }
};
```

Depois use no código:

```tsx
className = 'bg-custom-primary dark:bg-dark-custom-primary';
```

## 🎨 Classes Pré-definidas

O arquivo `global.css` inclui classes de componentes prontas:

- `.btn-primary` - Botão primário
- `.btn-secondary` - Botão secundário
- `.card` - Card com tema
- `.input-field` - Campo de input temático
- `.text-heading` - Texto de cabeçalho
- `.text-body` - Texto de corpo
- `.text-caption` - Texto de legenda

## 🧪 Testando Cores

Execute `yarn test` para garantir que as cores não quebram os testes.
Execute `npx expo start` para testar visualmente no app.
