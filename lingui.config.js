module.exports = {
    locales: ['pt-BR', 'en'],
    sourceLocale: 'pt-BR',
    catalogs: [
        {
            path: 'src/core/config/lingui/locales/{locale}/messages',
            include: ['src/', 'app/'],
            exclude: ['**/node_modules/**']
        }
    ],
    format: 'po',
    compileNamespace: 'es'
};
