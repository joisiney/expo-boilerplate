# 📁 Arquivos Não Essenciais

Este documento lista arquivos e componentes que **não são essenciais** para o funcionamento básico da aplicação, mas que podem ser úteis para funcionalidades específicas ou demonstrações.

---

## 🎯 Objetivo

Identificar arquivos que podem ser removidos ou substituídos sem afetar o core da aplicação, facilitando:

- **Otimização de bundle**: Reduzir tamanho da aplicação
- **Manutenção**: Focar em funcionalidades essenciais
- **Customização**: Permitir substituições específicas
- **Documentação**: Entender dependências opcionais

---

## 📋 Lista de Arquivos Não Essenciais

### **🧪 Componentes de Demonstração**

#### **ThemeToggleMolecule**

- **Arquivo**: `src/molecules/theme-toggle/theme-toggle.molecule.tsx`
- **Tipo**: Molécula de demonstração
- **Dependências**:
    - `@/atoms/button`
    - `@/atoms/text`
    - `@/core/config/theme`
    - `@lingui/core/macro`
- **Funcionalidade**: Toggle de tema (claro/escuro/sistema)
- **Status**: ⚠️ **Não Essencial**
- **Motivo**: Funcionalidade de UX opcional, não afeta core da aplicação
- **Alternativas**:
    - Usar componente nativo do sistema
    - Implementar toggle mais simples
    - Remover completamente se não necessário

**Estrutura do Componente:**

```tsx
// Usa ButtonAtom + TextAtom para composição
// Integra com useTheme hook
// Suporta internacionalização (i18n)
// Renderiza ícones e labels dinâmicos
```

---

## 🔄 Como Usar Esta Lista

### **Para Desenvolvimento:**

1. **Identificar dependências**: Verificar se o arquivo é realmente necessário
2. **Avaliar impacto**: Testar remoção em ambiente de desenvolvimento
3. **Documentar mudanças**: Atualizar esta lista conforme necessário

### **Para Produção:**

1. **Otimização**: Remover arquivos não utilizados
2. **Bundle splitting**: Separar funcionalidades opcionais
3. **Lazy loading**: Carregar apenas quando necessário

### **Para Manutenção:**

1. **Revisão periódica**: Verificar se arquivos ainda são necessários
2. **Atualização**: Manter lista atualizada
3. **Documentação**: Explicar motivos de inclusão/remoção

---

## 📝 Critérios de Classificação

### **⚠️ Não Essencial:**

- Funcionalidades de UX opcionais
- Componentes de demonstração
- Features experimentais
- Integrações opcionais

### **✅ Essencial:**

- Core da aplicação
- Funcionalidades críticas
- Dependências obrigatórias
- Componentes base

### **🔄 Condicional:**

- Depende do contexto de uso
- Pode ser essencial em alguns cenários
- Requer avaliação específica

---

## 🚀 Próximos Passos

1. **Identificar mais arquivos**: Revisar codebase completa
2. **Categorizar dependências**: Separar por tipo de funcionalidade
3. **Criar scripts**: Automatizar identificação de arquivos não utilizados
4. **Documentar alternativas**: Listar opções de substituição

---

## 📚 Referências

- [Bundle Analysis](../scripts/bundle-analysis.md)
- [Performance Guidelines](../performance.md)
- [Architecture Decisions](../architecture.md)

---

_Última atualização: $(date)_
