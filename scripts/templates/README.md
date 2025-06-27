# 🚨 TEMPLATES DE CONFIGURAÇÃO - LEIA ANTES DE EDITAR

## ⚠️ ATENÇÃO CRÍTICA

**NUNCA EDITE OS ARQUIVOS DE CONFIGURAÇÃO NO ROOT DO PROJETO DIRETAMENTE!**

Os arquivos nesta pasta são os **TEMPLATES ORIGINAIS** que são copiados para novos projetos quando alguém usa este boilerplate.

## 📁 Estrutura dos Templates

```
scripts/templates/
├── .gitignore          # Template do Git ignore
├── .prettierrc         # Template do Prettier
├── .prettierignore     # Template do Prettier ignore
└── .vscode/
    ├── settings.json   # Template das configurações do VS Code
    └── extensions.json # Template das extensões recomendadas
```

## 🔄 Fluxo de Trabalho CORRETO

### Para EDITAR configurações:

1. **Edite APENAS os arquivos em `scripts/templates/`**
2. **Execute o script de sincronização:**
    ```bash
    yarn sync-templates
    ```
3. **Commit as alterações nos templates E nos arquivos do root**

### Para USAR o template:

- O script `setup-git-hooks.js` copia automaticamente os templates para o root
- Isso acontece no `postinstall` quando alguém clona o projeto

## 🚫 O QUE NÃO FAZER

❌ **NUNCA** edite `.prettierrc`, `.prettierignore`, `.gitignore` ou `.vscode/*` no root  
❌ **NUNCA** faça commit de alterações desses arquivos sem atualizar os templates  
❌ **NUNCA** ignore este README - ele existe por um motivo crítico!

## ✅ O QUE FAZER

✅ **SEMPRE** edite os arquivos em `scripts/templates/`  
✅ **SEMPRE** execute `yarn sync-templates` após editar  
✅ **SEMPRE** teste o template criando um projeto novo  
✅ **SEMPRE** documente mudanças significativas

## 🔧 Scripts Disponíveis

- `yarn sync-templates` - Sincroniza templates para o root (para desenvolvimento)
- `yarn setup-git-hooks` - Aplica templates em novo projeto (para usuários)

## 🎯 Por que esta estrutura?

1. **Consistência**: Garante que todos os projetos criados tenham as mesmas configurações
2. **Manutenibilidade**: Centralizamos as configurações em um local
3. **Versionamento**: As configurações são versionadas junto com o código
4. **Automação**: Novos projetos são configurados automaticamente

## 🚨 Consequências de NÃO seguir este fluxo:

- Configurações inconsistentes entre projetos
- Perda de configurações quando alguém clona o template
- Problemas de lint e formatação para novos desenvolvedores
- Horas perdidas debugando problemas de configuração

---

**💡 Lembre-se: Este boilerplate é usado por outros desenvolvedores. Suas alterações afetam TODOS os projetos futuros!**
