# Estrutura de Testes

Este diretório contém toda a configuração e estrutura de testes do projeto.

## 📁 Estrutura

```
src/__tests__/
├── setup.ts                    # Configuração inicial do Jest
├── coverage/                   # Relatórios de cobertura (ignorado no git)
├── utils/
│   └── auto-import-modules.ts  # Auto-import de mocks
└── mocks/
    ├── files.mock.ts           # Mock para arquivos estáticos
    └── modules/                # Mocks de módulos específicos
        ├── expo-font.mock.ts
        ├── expo-router.mock.ts
        ├── expo-splash-screen.mock.ts
        └── react-native-svg.mock.ts
```

## 🚀 Auto-Import de Mocks

Esta estrutura utiliza um sistema de **auto-import** que carrega automaticamente todos os mocks da pasta `modules/` sem precisar modificar arquivos de configuração.

### Como funciona

1. O arquivo `utils/auto-import-modules.ts` simula a funcionalidade `require.context` do webpack
2. Ele escaneia a pasta `mocks/modules/` procurando por arquivos `.mock.ts` ou `.mock.js`
3. Todos os mocks encontrados são carregados automaticamente

### Como adicionar um novo mock

1. Crie um arquivo na pasta `src/__tests__/mocks/modules/`
2. Use o padrão de nomenclatura: `nome-do-modulo.mock.ts`
3. O mock será carregado automaticamente na próxima execução dos testes

**Exemplo:**

```typescript
// src/__tests__/mocks/modules/minha-biblioteca.mock.ts
jest.mock('minha-biblioteca', () => ({
  MinhaFuncao: jest.fn(() => 'resultado mockado'),
  MeuComponente: () => 'MeuComponente'
}));
```

## 🎯 Vantagens desta abordagem

- ✅ **Sem configuração manual**: Novos mocks são carregados automaticamente
- ✅ **Organização**: Cada mock em seu próprio arquivo
- ✅ **Escalabilidade**: Fácil manutenção conforme o projeto cresce
- ✅ **Flexibilidade**: Suporte a TypeScript e JavaScript
- ✅ **Tratamento de erros**: Logs informativos em caso de problemas

## 📊 Coverage

Os relatórios de cobertura são gerados em `src/__tests__/coverage/` e incluem:
- Relatório HTML navegável
- Relatório LCOV para integração com ferramentas
- Relatório de texto no terminal

Para visualizar o coverage:
```bash
yarn test --coverage
open src/__tests__/coverage/lcov-report/index.html
``` 