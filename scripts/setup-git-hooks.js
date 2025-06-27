#!/usr/bin/env node

const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Configurando Git hooks...');

// Verificar se está em um repositório Git
try {
    execSync('git rev-parse --git-dir', {stdio: 'ignore'});
} catch (error) {
    console.log('⚠️  Não é um repositório Git. Inicializando...');
    execSync('git init');
    console.log('✅ Repositório Git inicializado');
}

// Instalar Husky
try {
    console.log('📦 Instalando Husky...');
    execSync('npx husky install', {stdio: 'inherit'});
    console.log('✅ Husky instalado');
} catch (error) {
    console.error('❌ Erro ao instalar Husky:', error.message);
    process.exit(1);
}

// Criar diretório .husky se não existir
const huskyDir = path.join(process.cwd(), '.husky');
if (!fs.existsSync(huskyDir)) {
    fs.mkdirSync(huskyDir, {recursive: true});
}

// Configurar hook pre-commit
const preCommitContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
`;

const preCommitPath = path.join(huskyDir, 'pre-commit');
fs.writeFileSync(preCommitPath, preCommitContent);
fs.chmodSync(preCommitPath, '755');
console.log('✅ Hook pre-commit configurado');

// Configurar hook commit-msg
const commitMsgContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no -- commitlint --edit "$1"
`;

const commitMsgPath = path.join(huskyDir, 'commit-msg');
fs.writeFileSync(commitMsgPath, commitMsgContent);
fs.chmodSync(commitMsgPath, '755');
console.log('✅ Hook commit-msg configurado');

// Configurar hook pre-push
const prePushContent = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

# Verificar se há alterações antes do lint
git diff --quiet --exit-code
CHANGES_BEFORE=$?

# Executar verificações
echo "🔍 Executando verificações pre-push..."

echo "📝 Verificando TypeScript..."
yarn tsc

echo "🔧 Executando lint fix..."
yarn lint:fix

echo "✅ Verificando lint..."
yarn lint

echo "🧪 Executando testes..."
yarn test

# Verificar se houve alterações após o lint fix
git diff --quiet --exit-code
CHANGES_AFTER=$?

# Se houve alterações e não havia antes, fazer commit automático
if [ $CHANGES_BEFORE -eq 0 ] && [ $CHANGES_AFTER -ne 0 ]; then
    echo "🔧 Lint fix aplicou alterações. Fazendo commit automático..."
    git add .
    git commit -m "style: aplicar lint fix automático

Alterações aplicadas automaticamente pelo pre-push hook:
- Formatação de código com Prettier
- Correções de ESLint"
    echo "✅ Commit automático realizado"
fi

echo "🚀 Pre-push concluído com sucesso!"
`;

const prePushPath = path.join(huskyDir, 'pre-push');
fs.writeFileSync(prePushPath, prePushContent);
fs.chmodSync(prePushPath, '755');
console.log('✅ Hook pre-push configurado');

console.log('');
console.log('🎉 Git hooks configurados com sucesso!');
console.log('');
console.log('📋 Hooks configurados:');
console.log('  • pre-commit: Executa lint-staged');
console.log('  • commit-msg: Valida mensagens de commit');
console.log('  • pre-push: Executa verificações completas + commit automático');
console.log('');
console.log(
    '🚀 Agora você pode fazer commits seguindo o padrão Conventional Commits!'
);
console.log('   Exemplo: git commit -m "feat: adicionar nova funcionalidade"');
