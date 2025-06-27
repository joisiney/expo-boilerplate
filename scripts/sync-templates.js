#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔄 Sincronizando templates para o root...');
console.log('');

// Função para copiar arquivo
function copyTemplate(templatePath, targetPath, description) {
    try {
        const fullTemplatePath = path.join(
            __dirname,
            'templates',
            templatePath
        );
        const fullTargetPath = path.join(__dirname, '..', targetPath);

        if (fs.existsSync(fullTemplatePath)) {
            // Criar diretório pai se não existir
            const targetDir = path.dirname(fullTargetPath);
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, {recursive: true});
            }

            const content = fs.readFileSync(fullTemplatePath, 'utf8');
            fs.writeFileSync(fullTargetPath, content);
            console.log(`✅ ${description} sincronizado`);
        } else {
            console.log(`⚠️  Template não encontrado: ${templatePath}`);
        }
    } catch (error) {
        console.log(`❌ Erro ao sincronizar ${description}:`, error.message);
    }
}

// Lista de templates para sincronizar
const templates = [
    {
        template: '.prettierrc',
        target: '.prettierrc',
        description: 'Prettier config'
    },
    {
        template: '.prettierignore',
        target: '.prettierignore',
        description: 'Prettier ignore'
    },
    {
        template: '.gitignore',
        target: '.gitignore',
        description: 'Git ignore'
    },
    {
        template: '.vscode/settings.json',
        target: '.vscode/settings.json',
        description: 'VS Code settings'
    },
    {
        template: '.vscode/extensions.json',
        target: '.vscode/extensions.json',
        description: 'VS Code extensions'
    }
];

// Sincronizar todos os templates
templates.forEach(({template, target, description}) => {
    copyTemplate(template, target, description);
});

console.log('');
console.log('🎉 Sincronização concluída!');
console.log('');
console.log('📋 Próximos passos:');
console.log('  1. Verifique se as alterações estão corretas');
console.log('  2. Teste as configurações');
console.log(
    '  3. Faça commit das alterações nos templates E nos arquivos do root'
);
console.log('');
console.log(
    '⚠️  LEMBRE-SE: Sempre edite os templates em scripts/templates/, nunca no root!'
);
