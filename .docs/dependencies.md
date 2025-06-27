# Dependências do Projeto

## 📦 Dependências Principais

### Core
- `expo` - Framework principal
- `expo-router` - Navegação baseada em arquivos
- `react-native` - Framework mobile
- `typescript` - Tipagem estática

### UI/UX
- `@expo-google-fonts/quicksand` - Fontes do Google
- `expo-status-bar` - Barra de status
- `expo-splash-screen` - Splash screen
- `react-native-svg` - Componentes SVG
- `class-variance-authority` - Gerenciamento de variantes para classes CSS

### Testes
- `jest` - Framework de testes
- `@testing-library/react-native` - Utilitários de teste
- `@testing-library/jest-native` - Matchers para React Native

## 🔧 Configurações Importantes

### Package.json Scripts
```json
{
  "scripts": {
    "start": "expo start",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### Mocks Necessários
- `@expo-google-fonts/quicksand` → `expo-google-fonts-quicksand.mock.ts`
- `expo-router` → `expo-router.mock.ts`
- `expo-splash-screen` → `expo-splash-screen.mock.ts`
- `react-native-svg` → `react-native-svg.mock.ts`
- `class-variance-authority` → `class-variance-authority.mock.ts`
- Arquivos estáticos → `files.mock.ts`

## ⚠️ Dependências Peer
- `expo-constants` (peer do expo-router)
- `expo-linking` (peer do expo-router)

## 🚫 Evitar
- `any` types
- `require()` para imports de módulos
- Fontes locais (usar Google Fonts)
- Mocks inline nos testes 