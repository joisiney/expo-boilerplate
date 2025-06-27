# 🔧 Workflow Git - Qualidade de Código

Este projeto utiliza ferramentas automatizadas para garantir qualidade de código e padronização.

## 🛠️ Ferramentas Configuradas

### **Husky** 🐕

Git hooks que executam automaticamente antes de commits e pushes.

### **lint-staged** 🧹

Executa linters apenas nos arquivos modificados (staged).

### **Commitlint** ✅

Valida se mensagens de commit seguem o padrão estabelecido.

## 🚀 Como Usar

### **1. Fazendo commits**

```bash
# Processo normal de commit
git add .
git commit -m "feat: adicionar nova funcionalidade"
```

### **2. Processo Automático**

#### **Pre-commit hook**

Quando você faz `git commit`, automaticamente:

- Formata código com Prettier
- Corrige problemas de ESLint
- Apenas nos arquivos modificados

#### **Pre-push hook**

Quando você faz `git push`, automaticamente:

1. **Verificação TypeScript**: `yarn tsc`
2. **Lint fix**: `yarn lint:fix`
3. **Verificação lint**: `yarn lint`
4. **Testes**: `yarn test`
5. **Commit automático**: Se o lint fix aplicar alterações, faz commit automático com mensagem padronizada

#### **Commit-msg hook**

- Valida se mensagem segue padrão
- Bloqueia commit se não estiver no formato correto

### **3. Tipos de Commit Disponíveis**

| Tipo       | Emoji | Descrição           | Exemplo                                 |
| ---------- | ----- | ------------------- | --------------------------------------- |
| `feat`     | ✨    | Nova funcionalidade | `feat: adicionar login com Google`      |
| `fix`      | 🐛    | Correção de bug     | `fix: corrigir erro de validação`       |
| `docs`     | 📝    | Documentação        | `docs: atualizar README`                |
| `style`    | 💄    | Formatação/estilo   | `style: corrigir indentação`            |
| `refactor` | ♻️    | Refatoração         | `refactor: melhorar performance`        |
| `perf`     | ⚡    | Performance         | `perf: otimizar renderização`           |
| `test`     | ✅    | Testes              | `test: adicionar testes unitários`      |
| `build`    | 📦    | Build/CI            | `build: atualizar dependências`         |
| `ci`       | 👷    | CI/CD               | `ci: configurar GitHub Actions`         |
| `chore`    | 🔧    | Tarefas gerais      | `chore: atualizar dependências`         |
| `revert`   | ⏪    | Reverter commit     | `revert: reverter mudança problemática` |

### **4. Formato da Mensagem**

```
tipo(escopo): descrição curta

Descrição detalhada (opcional)

BREAKING CHANGE: mudança que quebra compatibilidade (opcional)
Closes #123 (opcional)
```

### **5. Exemplos de Commits Válidos**

```bash
feat: adicionar sistema de autenticação
fix(auth): corrigir erro de token expirado
docs: adicionar guia de instalação
style: aplicar formatação Prettier
refactor(api): otimizar chamadas HTTP
test: adicionar testes para componente Button
chore: atualizar dependências do projeto
```

## 🔧 Configurações

### **lint-staged** (.lintstagedrc.js)

Configuração separada para melhor organização:

```javascript
module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{json,md,yml,yaml}': ['prettier --write']
};
```

### **Pre-push Hook** (.husky/pre-push)

Hook automatizado que:

- Executa verificações completas antes do push
- Faz commit automático se lint fix aplicar alterações
- Garante que código enviado está sempre limpo e testado

### **commitlint** (commitlint.config.js)

- Máximo 72 caracteres no título
- Tipo obrigatório e em minúsculas
- Descrição obrigatória
- Sem ponto final no título

## 🚨 Resolução de Problemas

### **Commit foi bloqueado por lint-staged**

```bash
# Corrigir erros manualmente e tentar novamente
yarn lint:fix
git add .
git commit -m "fix: corrigir problemas de lint"
```

### **Push foi bloqueado por pre-push**

```bash
# Verificar erros específicos
yarn tsc  # Verificar erros TypeScript
yarn lint # Verificar erros de lint
yarn test # Verificar testes falhando

# Corrigir e tentar novamente
git push
```

### **Mensagem de commit rejeitada**

```bash
# Usar formato correto
git commit -m "feat: descrição da funcionalidade"
```

### **Pular hooks (emergência apenas)**

```bash
# ⚠️ Usar apenas em emergências
git commit --no-verify -m "mensagem"
git push --no-verify
```

## 📋 Scripts Disponíveis

```bash
# Formatar código
yarn format

# Lint e fix
yarn lint:fix

# Verificar lint
yarn lint

# Testes
yarn test

# Verificação completa (executada no pre-push)
yarn pre-push

# Validar mensagem de commit
yarn commitlint
```

## 🎯 Benefícios

✅ **Código consistente**: Formatação automática  
✅ **Qualidade garantida**: Linting e testes automáticos  
✅ **Histórico limpo**: Commits padronizados  
✅ **CI/CD friendly**: Mensagens parseáveis  
✅ **Colaboração**: Padrões claros para toda equipe  
✅ **Manutenibilidade**: Configuração modular e organizada  
✅ **Automação inteligente**: Commits automáticos para lint fixes
