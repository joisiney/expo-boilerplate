# NativeWind Configuration

Este diretório contém as configurações do NativeWind (Tailwind CSS para React Native) e integração com twrnc.

## 📁 Estrutura

- `colors.js` - Paleta de cores completa (light + dark mode)
- `font-family.js` - Configurações de fontes
- `font-size.js` - Tamanhos de fonte
- `global.css` - Estilos globais e componentes
- `index.ts` - API principal com hooks e funções utilitárias
- `README.md` - Esta documentação

## 🎨 Sistema Híbrido: NativeWind + twrnc

### Por que usar ambos?

- **NativeWind**: Para componentes React Native com `className`
- **twrnc**: Para React Navigation e objetos `style` complexos

## 🚀 API Principal (`index.ts`)

### **Template Literal `tw`**

```tsx
// Estilos básicos com dark mode automático
const headerStyle = tw`bg-background-primary dark:bg-dark-background-secondary`;
const textStyle = tw`text-lg font-bold text-text-primary dark:text-dark-text-primary`;

// Estilos condicionais
const dynamicStyle = tw`p-4 rounded-lg ${condition ? 'bg-red-500' : 'bg-blue-500'}`;
```

### **Hook `useClassNameToColor`**

Hook reativo que converte classes Tailwind em cores com suporte automático a dark mode:

```tsx
import {useClassNameToColor} from '@/core/config/nativewind';

function MyComponent() {
    // Cores que atualizam automaticamente com o tema
    const textColor = useClassNameToColor(
        'text-text-primary dark:text-dark-text-primary'
    );
    const bgColor = useClassNameToColor(
        'bg-background-primary dark:bg-dark-background-primary'
    );

    return (
        <View style={{backgroundColor: bgColor}}>
            <Text style={{color: textColor}}>Texto reativo</Text>
        </View>
    );
}
```

### **Funções Utilitárias**

```tsx
// Obter colorScheme atual (não reativo)
const currentScheme = getColorScheme(); // 'light' | 'dark'

// Verificar se está em dark mode (não reativo)
const darkMode = isDark(); // boolean

// Extrair cor de classe (não reativo)
const color = getColor('text-blue-600 dark:text-blue-400'); // string
```

## 📋 **Exemplo Completo - React Navigation**

```tsx
// app/_layout.tsx
import {tw, useClassNameToColor} from '@/core/config/nativewind';

function RootLayoutContent() {
    // Estilos reativos usando tw template literal
    const headerStyle = tw`bg-background-primary dark:bg-dark-background-secondary`;
    const headerTitleStyle = tw`font-bold text-text-primary dark:text-dark-text-primary`;

    // Cores reativas usando hook
    const headerTintColor = useClassNameToColor(
        'text-text-primary dark:text-dark-text-primary'
    );
    const statusBarBg = useClassNameToColor(
        'bg-background-primary dark:bg-dark-background-primary'
    );

    return (
        <>
            <Stack
                screenOptions={{
                    headerStyle,
                    headerTitleStyle,
                    headerTintColor
                }}
            >
                <Stack.Screen name="index" options={{title: 'Home'}} />
            </Stack>
            <StatusBar backgroundColor={statusBarBg} />
        </>
    );
}
```

## 📋 **Exemplo Completo - Componentes**

```tsx
import {View, Text} from 'react-native';
import {tw, useClassNameToColor} from '@/core/config/nativewind';

export default function MyScreen() {
    // Hook reativo para cores específicas
    const borderColor = useClassNameToColor(
        'border-border-light dark:border-dark-border-light'
    );

    return (
        <View className="flex-1 bg-background-primary dark:bg-dark-background-primary">
            {/* NativeWind para componentes normais */}
            <Text className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
                Título com dark mode automático
            </Text>

            {/* twrnc para estilos complexos */}
            <View
                style={[
                    tw`p-4 rounded-lg bg-surface-primary dark:bg-dark-surface-primary`,
                    {borderColor, borderWidth: 1}
                ]}
            >
                <Text className="text-center text-text-secondary dark:text-dark-text-secondary">
                    Híbrido: className + style
                </Text>
            </View>
        </View>
    );
}
```

## 🎯 **Casos de Uso**

### ✅ **Use NativeWind (`className`) quando:**

- Componentes React Native normais
- Precisa de performance máxima
- Quer dark mode automático simples
- Estilos estáticos

### ✅ **Use twrnc (`tw`) quando:**

- React Navigation (headers, tabs)
- Objetos `style` complexos
- Estilos condicionais dinâmicos
- Combinação com outros estilos

### ✅ **Use `useClassNameToColor` quando:**

- Precisa extrair cores específicas
- React Navigation que exige cores brutas
- Componentes que precisam de cores reativas
- StatusBar, bordas, etc.

## 🔧 **Configurações**

### NativeWind (principal)

- Arquivo: `tailwind.config.js`
- Suporte completo a dark mode
- Otimizado para performance

### twrnc (auxiliar)

- Arquivo: `tailwind-twrnc.config.js`
- Configuração simplificada
- Sem conflitos com NativeWind

## ⚠️ **Regras Importantes**

1. **NativeWind PRIMEIRO**: Sempre prefira `className` quando possível
2. **tw para casos específicos**: Use `tw` quando `className` não funciona
3. **useClassNameToColor para cores**: Use o hook quando precisar de cores reativas
4. **Cores centralizadas**: Ambos usam o mesmo `colors.js`
5. **Configurações separadas**: Evita conflitos entre os sistemas
6. **Reatividade automática**: Hooks atualizam automaticamente com tema

## 🧪 **Testando**

```bash
# Testes unitários
yarn test

# Testar visualmente
npx expo start
```

## 📚 **Resumo da API**

| Função/Hook           | Tipo             | Reativo | Uso                              |
| --------------------- | ---------------- | ------- | -------------------------------- |
| `tw`                  | Template literal | ✅      | Estilos com dark mode automático |
| `useClassNameToColor` | Hook             | ✅      | Extrair cores reativas           |
| `getColorScheme`      | Função           | ❌      | Obter tema atual                 |
| `isDark`              | Função           | ❌      | Verificar dark mode              |
| `getColor`            | Função           | ❌      | Extrair cor não reativa          |

**Regra de ouro**: Use versões reativas (hooks) em componentes, versões não reativas fora de componentes.
