# 🚀 Expo Boilerplate

Um boilerplate moderno e bem estruturado para desenvolvimento de aplicações React Native com Expo.

## ✨ Funcionalidades

- **Expo SDK 53** - Framework moderno para desenvolvimento React Native
- **Expo Router** - Navegação baseada em arquivos
- **TypeScript** - Tipagem estática para melhor desenvolvimento
- **Fonte Quicksand** - Tipografia moderna e elegante
- **Jest + Testing Library** - Testes unitários e de componentes
- **ESLint** - Linting para qualidade de código
- **Cobertura de testes** - Relatórios de cobertura configurados

## 📦 Estrutura do Projeto

```
src/
├── app/                    # Rotas do Expo Router
│   ├── _layout.tsx        # Layout principal
│   ├── index.tsx          # Página inicial
│   ├── +not-found.tsx     # Página 404
│   └── *.spec.tsx         # Testes das páginas
├── __tests__/             # Configurações de teste
│   ├── mocks/             # Mocks para testes
│   └── setup.ts           # Setup dos testes
assets/
├── fonts/                 # Fontes customizadas
└── images/                # Imagens e ícones
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd expo-boilerplate
```

2. Instale as dependências:
```bash
yarn install
```

3. Inicie o projeto:
```bash
yarn start
```

## 📱 Scripts Disponíveis

- `yarn start` - Inicia o Expo development server
- `yarn android` - Abre no emulador Android
- `yarn ios` - Abre no simulador iOS
- `yarn web` - Abre no navegador web
- `yarn test` - Executa os testes
- `yarn test:watch` - Executa os testes em modo watch
- `yarn test:coverage` - Executa os testes com relatório de cobertura
- `yarn lint` - Executa o linting do código

## 🧪 Testes

O projeto inclui uma configuração completa de testes com:

- **Jest** como runner de testes
- **Testing Library** para testes de componentes React Native
- **Mocks** configurados para Expo Router e React Native SVG
- **Cobertura de código** com relatórios detalhados

Para executar os testes:
```bash
yarn test
```

Para ver a cobertura:
```bash
yarn test:coverage
```

## 🎨 Customização

### Fontes
As fontes Quicksand estão pré-configuradas em três pesos:
- Quicksand-Regular
- Quicksand-Medium  
- Quicksand-Bold

### Cores e Estilos
O projeto usa uma paleta de cores moderna e minimalista. Você pode personalizar os estilos nos arquivos de componentes.

## 📝 Padrões de Desenvolvimento

- **Componentes funcionais** com hooks
- **TypeScript** para tipagem
- **Testes unitários** para cada componente
- **Estrutura de arquivos** organizada por funcionalidade
- **Linting** para manter qualidade do código

## 🚀 Deploy

Este boilerplate está pronto para deploy nas seguintes plataformas:

- **Expo Application Services (EAS)**
- **App Store** (iOS)
- **Google Play Store** (Android)
- **Web** (através do Expo for Web)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎯 Próximos Passos

Após configurar o boilerplate, você pode:

1. Adicionar navegação em tabs
2. Implementar autenticação
3. Configurar gerenciamento de estado (Redux, Zustand, etc.)
4. Adicionar mais telas e funcionalidades
5. Configurar push notifications
6. Implementar analytics

---

Feito com ❤️ para acelerar o desenvolvimento de apps com Expo!
