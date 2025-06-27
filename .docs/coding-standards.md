# Padrões de Código - Expo Boilerplate

## 📋 Regras Gerais

### Estrutura de Arquivos
- Máximo 200-300 linhas por arquivo
- Um componente por arquivo
- Nomes descritivos e em camelCase
- Evitar duplicação de código

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

### TypeScript
- Sempre tipar adequadamente
- Evitar `any`
- Usar interfaces para objetos complexos
- Preferir `type` para unions simples

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