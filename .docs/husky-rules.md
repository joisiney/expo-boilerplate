# 🐕 Husky Rules

Este documento descreve todas as regras e configurações do Husky implementadas no projeto para garantir qualidade e padronização dos commits.

---

## 📋 Visão Geral

O Husky é configurado para executar hooks automáticos que garantem:

- **Qualidade do código**: Linting e formatação automática
- **Padronização de commits**: Validação de mensagens de commit
- **Normalização de mensagens**: Conversão automática de `\n` para quebras de linha reais

---

## 🔧 Hooks Configurados

### **pre-commit Hook**

**Arquivo**: `.husky/pre-commit`

**Função**: Executa antes de cada commit para garantir qualidade do código.

**Comandos executados**:

```bash
npx lint-staged
```

**O que faz**:

- Executa lint-staged que roda linting e formatação apenas nos arquivos modificados
- Aplica ESLint com `--fix`
- Aplica Prettier para formatação
- Bloqueia o commit se houver erros de linting

---

### **commit-msg Hook**

**Arquivo**: `.husky/commit-msg`

**Função**: Valida e normaliza a mensagem de commit.

**Comandos executados**:

```bash
node scripts/normalize-commit-msg.js "$1"
npx --no -- commitlint --edit "$1"
```

**O que faz**:

1. **Normalização**: Converte `\n` e `\n\n` literais em quebras de linha reais
2. **Validação**: Aplica regras do commitlint para validar formato da mensagem

---

## 📝 Regras de Commit (Commitlint)

### **Formato Obrigatório**

```
type(scope): subject

body

footer
```

### **Tipos Permitidos**

- `feat` - Nova funcionalidade
- `fix` - Correção de bug
- `docs` - Documentação
- `style` - Formatação/estilo
- `refactor` - Refatoração
- `perf` - Performance
- `test` - Testes
- `chore` - Tarefas de build/CI
- `revert` - Reverter commit
- `build` - Build system
- `ci` - CI/CD

### **Regras Aplicadas**

- **Título**: Máximo 75 caracteres
- **Tipo**: Sempre em minúsculas
- **Escopo**: Sempre em minúsculas
- **Assunto**: Sem ponto final
- **Corpo**: Máximo 100 caracteres por linha
- **Rodapé**: Máximo 100 caracteres por linha
- **Proibido**: `\n` literais na mensagem

---

## 🔄 Normalização Automática

### **Script**: `scripts/normalize-commit-msg.js`

**Função**: Converte `\n` literais em quebras de linha reais.

**Como funciona**:

```javascript
const fs = require('fs');

const commitMsgFile = process.argv[2];
let msg = fs.readFileSync(commitMsgFile, 'utf8');

// Substitui \n por quebras de linha reais
msg = msg.replace(/\\n/g, '\n');

fs.writeFileSync(commitMsgFile, msg);
```

**Exemplo de conversão**:

```bash
# Antes (seria rejeitado)
git commit -m "feat: nova funcionalidade\n\n- Adiciona feature X\n- Corrige bug Y"

# Depois (aceito automaticamente)
feat: nova funcionalidade

- Adiciona feature X
- Corrige bug Y
```

---

## 📋 Formas de Fazer Commit

### **1. Commit Simples**

```bash
git commit -m "feat: adicionar nova funcionalidade"
```

### **2. Commit com Descrição (Múltiplos -m)**

```bash
git commit -m "feat: adicionar nova funcionalidade" \
-m "- Implementa sistema de autenticação" \
-m "- Adiciona validação de formulários" \
-m "- Cria testes unitários"
```

### **3. Commit com \n (Normalizado Automaticamente)**

```bash
git commit -m "feat: adicionar nova funcionalidade\n\n- Implementa sistema de autenticação\n- Adiciona validação de formulários"
```

### **4. Editor Interativo**

```bash
git commit
```

Abre o editor padrão onde você pode escrever:

```
feat: adicionar nova funcionalidade

- Implementa sistema de autenticação
- Adiciona validação de formulários
- Cria testes unitários
```

---

## ⚠️ Mensagens de Erro Comuns

### **"subject may not be empty"**

- **Causa**: Assunto do commit está vazio
- **Solução**: Adicionar descrição após o tipo e escopo

### **"type may not be empty"**

- **Causa**: Tipo do commit está vazio
- **Solução**: Usar um dos tipos permitidos (feat, fix, docs, etc.)

### **"header-max-length"**

- **Causa**: Título do commit excede 75 caracteres
- **Solução**: Reduzir o título ou usar descrição no corpo

### **"subject-case"**

- **Causa**: Assunto usa capitalização incorreta
- **Solução**: Usar apenas minúsculas no assunto

---

## 🛠️ Configuração do Lint-Staged

**Arquivo**: `.lintstagedrc.js`

```javascript
module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{json,md,yml,yaml}': ['prettier --write']
};
```

**O que faz**:

- **Arquivos JS/TS**: Executa ESLint com `--fix` e Prettier
- **Arquivos de Configuração**: Executa apenas Prettier

---

## 🔍 Troubleshooting

### **Commit Bloqueado por Lint-Staged**

1. Verificar erros de ESLint: `yarn lint`
2. Verificar formatação: `yarn format`
3. Corrigir erros e tentar novamente

### **Commit Bloqueado por Commitlint**

1. Verificar formato da mensagem
2. Usar tipos permitidos
3. Respeitar limite de caracteres
4. Usar múltiplos `-m` ou quebras de linha reais

### **Hook Não Executando**

1. Verificar se Husky está instalado: `yarn husky install`
2. Verificar permissões dos hooks: `chmod +x .husky/*`
3. Verificar se hooks estão ativos: `git config core.hooksPath .husky`

---

## 📚 Referências

- [Husky Documentation](https://typicode.github.io/husky/)
- [Commitlint Documentation](https://commitlint.js.org/)
- [Lint-Staged Documentation](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🔄 Atualizações

Para atualizar as regras do Husky:

1. **Modificar configurações**: Editar arquivos de configuração
2. **Testar localmente**: Fazer commits de teste
3. **Documentar mudanças**: Atualizar este arquivo
4. **Comunicar equipe**: Informar sobre novas regras

---

_Última atualização: $(date)_
