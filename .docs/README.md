# Documentação de Referência

Esta pasta contém a documentação que deve sempre ser consultada antes de gerar código.

## 📚 Arquivos de Referência

### 🎯 [coding-standards.md](./coding-standards.md)
Padrões de código, estrutura de arquivos, testes, fontes, imports, TypeScript e mocks.

### 🏗️ [architecture.md](./architecture.md) 
Arquitetura do projeto, estrutura de componentes, padrões de teste e sistema de design.

### 🧪 [testing-patterns.md](./testing-patterns.md)
Padrões de teste, HocMount, estrutura de arquivos de teste e boas práticas.

### 📦 [dependencies.md](./dependencies.md)
Lista de dependências, configurações importantes e o que evitar.

## 🔄 Como Usar

### Para o Assistente AI:
1. **SEMPRE** consultar estes arquivos antes de gerar código
2. Seguir os padrões definidos sem questionar
3. Usar as estruturas e exemplos como referência
4. Manter consistência com a arquitetura existente

### Para o Desenvolvedor:
1. Atualizar estes arquivos quando mudanças importantes forem feitas
2. Adicionar novos padrões conforme o projeto evolui
3. Manter a documentação sincronizada com o código

## ⚡ Regras de Ouro

- **Máximo 200-300 linhas por arquivo**
- **Sempre criar testes (.spec.tsx) com HocMount**
- **Usar @expo-google-fonts/quicksand para fontes**
- **Mocks em src/__tests__/mocks/modules/**
- **Evitar `any` e `require()`**
- **Seguir padrões TypeScript**
- **NUNCA colocar comentários no código**
- **Nomes sempre em dash-case**
- **Sempre usar sufixos (.atom, .mock, .types)**
- **Atomic Design obrigatório**
- **Types em namespace prefixado com N**
- **src/app: export default + function**
- **Atomic Design: export const + arrow function**
- **NUNCA importar React (JSX Transform automático)**
- **TWithTestID obrigatório em todos os componentes**
- **HocMount obrigatório em todos os testes**

---

💡 **Dica**: Esta documentação é a fonte da verdade para padrões de código neste projeto. 