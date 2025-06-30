module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // Nova funcionalidade
                'fix', // Correção de bug
                'docs', // Documentação
                'style', // Formatação/estilo
                'refactor', // Refatoração
                'perf', // Performance
                'test', // Testes
                'chore', // Tarefas de build/CI
                'revert', // Reverter commit
                'build', // Build system
                'ci' // CI/CD
            ]
        ],
        'type-case': [2, 'always', 'lower-case'],
        'type-empty': [2, 'never'],
        'scope-case': [2, 'always', 'lower-case'],
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
        ],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'header-max-length': [2, 'always', 75],
        'body-leading-blank': [1, 'always'],
        'body-max-line-length': [2, 'always', 100],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 100],
        // Regra customizada para proibir \n e \n\n
        'no-literal-backslash-n': [2, 'always']
    },
    plugins: [
        {
            rules: {
                'no-literal-backslash-n': ({header, body, footer}) => {
                    const regex = /\\n/;
                    if (
                        regex.test(header) ||
                        regex.test(body) ||
                        regex.test(footer)
                    ) {
                        return [
                            false,
                            'A mensagem de commit não pode conter \\n ou \\n\\n literais. Use múltiplos -m ou quebras de linha reais.'
                        ];
                    }
                    return [true];
                }
            }
        }
    ]
};
