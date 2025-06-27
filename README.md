# 🚀 Expo Boilerplate (WIP)

Um boilerplate moderno e bem estruturado para desenvolvimento de aplicações React Native com Expo, incluindo workflow Git automatizado para qualidade de código.

## 🎯 Início Rápido

### **Usando como Template (Recomendado)**

Crie um novo projeto baseado neste boilerplate:

```bash
# Usando URL completa
npx create-expo-app@latest MeuApp --template https://github.com/joisiney/expo-boilerplate

# Ou usando sintaxe curta
npx create-expo-app@latest MeuApp --template joisiney/expo-boilerplate
```

### **Clonagem Manual**

```bash
git clone https://github.com/joisiney/expo-boilerplate.git MeuApp
cd MeuApp
yarn install
yarn start
```

## ✨ Funcionalidades

### **Desenvolvimento**

- **Expo SDK 53** - Framework moderno para desenvolvimento React Native
- **Expo Router** - Navegação baseada em arquivos
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **NativeWind** - Tailwind CSS para React Native
- **Lingui** - Internacionalização (i18n) configurada
- **Fonte Quicksand** - Tipografia moderna e elegante

### **Qualidade de Código**

- **ESLint + Prettier** - Formatação e linting automáticos
- **Husky** - Git hooks automatizados
- **lint-staged** - Linting apenas em arquivos modificados
- **Commitlint** - Validação de mensagens de commit
- **Jest + Testing Library** - Testes unitários e de componentes

### **Workflow Git Automatizado**

- **Pre-commit**: Formata código automaticamente
- **Commit-msg**: Valida mensagens seguindo Conventional Commits
- **Pre-push**: Executa TypeScript, lint, testes e faz commit automático para lint fixes

## 📦 Estrutura do Projeto

```
├── app/                        # Rotas do Expo Router
│   ├── _layout.tsx            # Layout principal
│   ├── index.tsx              # Página inicial
│   └── +not-found.tsx         # Página 404
├── src/
│   ├── __tests__/             # Configurações de teste
│   │   ├── mocks/             # Mocks para testes
│   │   └── setup.ts           # Setup dos testes
│   ├── @types/                # Definições de tipos
│   ├── atoms/                 # Componentes atômicos
│   ├── molecules/             # Componentes moleculares
│   ├── organisms/             # Componentes complexos
│   ├── features/              # Features da aplicação
│   ├── particles/             # Elementos básicos (cores, espaçamentos)
│   └── core/                  # Configurações centrais
│       ├── config/
│       │   ├── lingui/        # Configuração i18n
│       │   └── nativewind/    # Configuração Tailwind
├── docs/                      # Documentação
│   └── git-workflow.md        # Guia do workflow Git
├── .husky/                    # Git hooks
├── .lintstagedrc.js          # Configuração lint-staged
└── commitlint.config.js      # Configuração commitlint
```

## 🛠️ Instalação e Configuração

### **1. Criar projeto com template:**

```bash
npx create-expo-app@latest MeuApp --template joisiney/expo-boilerplate
cd MeuApp
```

### **2. Instalar dependências:**

```bash
yarn install
```

> 🎉 **Configuração Automática**: O script `postinstall` configura automaticamente todos os Git hooks (pre-commit, commit-msg, pre-push) após a instalação!

### **3. Configuração manual (se necessário):**

Se por algum motivo os hooks não foram configurados automaticamente, execute:

```bash
yarn setup-git-hooks
```

### **4. Iniciar desenvolvimento:**

```bash
yarn start
```

### **✅ Verificar se está funcionando:**

Teste o workflow fazendo um commit:

```bash
git add .
git commit -m "feat: testar workflow git"
```

Se tudo estiver configurado, você verá:

- ✅ Pre-commit executando lint-staged
- ✅ Commit-msg validando a mensagem
- ✅ Mensagem de commit aceita

## 📱 Scripts Disponíveis

### **Desenvolvimento**

- `yarn start` - Inicia o Expo development server
- `yarn android` - Abre no emulador Android
- `yarn ios` - Abre no simulador iOS
- `yarn web` - Abre no navegador web

### **Qualidade de Código**

- `yarn lint` - Verifica problemas de linting
- `yarn lint:fix` - Corrige problemas de linting automaticamente
- `yarn format` - Formata código com Prettier
- `yarn tsc` - Verifica tipos TypeScript

### **Testes**

- `yarn test` - Executa os testes
- `yarn test:watch` - Executa os testes em modo watch
- `yarn test:coverage` - Executa os testes com relatório de cobertura

### **Internacionalização**

- `yarn i18n:extract` - Extrai strings para tradução
- `yarn i18n:compile` - Compila traduções

## 🔧 Workflow Git

Este boilerplate inclui um workflow Git automatizado que garante qualidade de código:

### **Hooks Configurados:**

- **Pre-commit**: Formata código e corrige linting automaticamente
- **Commit-msg**: Valida mensagens seguindo [Conventional Commits](https://www.conventionalcommits.org/)
- **Pre-push**: Executa verificações completas (TypeScript, lint, testes)

### **Tipos de Commit Suportados:**

```bash
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação
refactor: refatoração
perf: melhoria de performance
test: testes
chore: tarefas gerais
```

### **Exemplo de Uso:**

```bash
git add .
git commit -m "feat: adicionar tela de login"
git push # Executa todas as verificações automaticamente
```

📖 **Documentação completa**: [Git Workflow Guide](docs/git-workflow.md)

## 🧪 Testes

O projeto inclui uma configuração completa de testes com:

- **Jest** como runner de testes
- **Testing Library** para testes de componentes React Native
- **Mocks** configurados para Expo Router, React Native SVG, etc.
- **Cobertura de código** com relatórios detalhados

```bash
yarn test              # Executar testes
yarn test:coverage     # Ver cobertura
```

## 🎨 Customização

### **Cores e Temas (NativeWind)**

Configuração em `src/core/config/nativewind/`:

- `colors.ts` - Paleta de cores
- `font-family.ts` - Famílias de fontes
- `font-size.ts` - Tamanhos de fonte

### **Internacionalização**

Configuração em `src/core/config/lingui/`:

- Suporte a múltiplos idiomas
- Extração automática de strings
- Hot reload de traduções

### **Fontes**

Fontes Quicksand pré-configuradas:

- Quicksand-Regular
- Quicksand-Medium
- Quicksand-Bold

## 🚀 Deploy

Este boilerplate está pronto para deploy:

- **Expo Application Services (EAS)**
- **App Store** (iOS)
- **Google Play Store** (Android)
- **Web** (através do Expo for Web)

```bash
# Configurar EAS
eas build:configure

# Build para produção
eas build --platform all
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: add amazing feature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎯 Próximos Passos

Após configurar o boilerplate, você pode:

1. **Configurar autenticação** com Expo AuthSession
2. **Adicionar navegação em tabs** com Expo Router
3. **Implementar gerenciamento de estado** (Zustand, Redux Toolkit)
4. **Configurar push notifications** com Expo Notifications
5. **Adicionar analytics** com Expo Analytics
6. **Implementar deep linking** com Expo Linking
7. **Configurar splash screen** personalizada

## 🔗 Links Úteis

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://expo.github.io/router/)
- [NativeWind](https://www.nativewind.dev/)
- [Lingui Documentation](https://lingui.js.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

⭐ **Se este boilerplate te ajudou, deixe uma estrela no repositório!**

Feito com ❤️ para acelerar o desenvolvimento de apps com Expo!
