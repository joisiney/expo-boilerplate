# Configurações do VS Code / Cursor

Este diretório contém configurações específicas para otimizar a experiência de desenvolvimento no VS Code/Cursor.

## 📦 Extensões Recomendadas

Quando abrir o projeto, o VS Code irá automaticamente sugerir a instalação das seguintes extensões:

### Essenciais
- **Prettier**: Formatação automática de código
- **ESLint**: Linting e correção automática
- **TypeScript**: Suporte aprimorado ao TypeScript

### React Native / Expo
- **Expo Tools**: Ferramentas específicas para desenvolvimento Expo
- **React Native Tools**: Suporte para desenvolvimento React Native
- **Tailwind CSS**: IntelliSense para classes do NativeWind

### Testing
- **Jest**: Execução e debug de testes
- **Test Adapter**: Integração de testes no VS Code

### Produtividade
- **Path Intellisense**: Autocomplete para caminhos de arquivos
- **Auto Rename Tag**: Renomeia tags JSX automaticamente
- **GitLens**: Ferramentas avançadas de Git
- **Error Lens**: Mostra erros inline no editor

## ⚙️ Configurações Automáticas

### Auto Save e Formatação
- **Auto Save**: Salva automaticamente quando o foco sai do arquivo
- **Format on Save**: Formata automaticamente ao salvar
- **ESLint Fix**: Corrige problemas de linting automaticamente
- **Organize Imports**: Organiza imports automaticamente

### TypeScript
- **Auto Imports**: Sugestões automáticas de imports
- **Move File Updates**: Atualiza imports quando arquivos são movidos
- **Relative Imports**: Preferência por imports relativos

### Tailwind CSS / NativeWind
- **IntelliSense**: Autocomplete para classes CSS
- **Class Regex**: Reconhece classes dentro de cva() e cx()

## 🚀 Tarefas Disponíveis

Acesse via `Cmd+Shift+P` → "Tasks: Run Task":

- **Start Expo**: Inicia o servidor de desenvolvimento
- **Run Tests**: Executa todos os testes
- **Run Tests (Watch)**: Executa testes em modo watch
- **Lint Fix**: Corrige problemas de linting
- **TypeScript Check**: Verifica tipos do TypeScript
- **Format All Files**: Formata todos os arquivos
- **Build iOS**: Compila para iOS
- **Build Android**: Compila para Android
- **Pre-push Check**: Executa todas as verificações antes do push

## 🐛 Debug

Configurações disponíveis para debug:

- **Expo: Debug Android**: Debug no emulador/device Android
- **Expo: Debug iOS**: Debug no simulador iOS
- **Run Jest Tests**: Executa testes no debugger
- **Debug Jest Tests**: Debug específico para testes

## 📁 Organização de Arquivos

O explorer está configurado com:
- **File Nesting**: Agrupa arquivos relacionados (.spec, .test, etc.)
- **Compact Folders**: Pastas vazias não são compactadas
- **Exclusões**: Oculta node_modules, .expo, builds, etc.

## 💡 Dicas

1. **Atalhos úteis**:
   - `Cmd+Shift+P`: Command Palette
   - `Cmd+P`: Quick Open
   - `Cmd+Shift+F`: Busca global
   - `F2`: Renomear símbolo

2. **Formatação automática**: 
   - Funciona ao salvar, colar e através de ações de código

3. **Imports automáticos**:
   - TypeScript sugere imports automaticamente
   - ESLint organiza e remove imports não utilizados

4. **Tests**:
   - Use a extensão Jest para executar testes individuais
   - Debug está configurado para breakpoints nos testes 