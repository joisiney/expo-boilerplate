// https://docs.expo.dev/guides/using-eslint/
import typescriptParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginUnusedImports from 'eslint-plugin-unused-imports';

export default [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'build/**',
            'coverage/**',
            'src/__tests__/coverage/**',
            '*.min.js',
            '.expo/**',
            '.expo-shared/**',
            'web-build/**',
            'ios/**',
            'android/**',
            'public/charting_library/**',
            '**/*.d.ts',
            'babel-plugin-auto-catch-async.js',
            'app.config.js',
            'scripts/**'
        ]
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                element: 'readonly',
                by: 'readonly',
                device: 'readonly',
                __dirname: 'readonly'
            }
        },
        plugins: {
            react: eslintPluginReact,
            prettier: eslintPluginPrettier,
            import: eslintPluginImport,
            'unused-imports': eslintPluginUnusedImports
        },
        rules: {
            ...eslintConfigPrettier.rules,

            // Regras de imports
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index'
                    ],
                    'newlines-between': 'never',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true
                    },
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'builtin',
                            position: 'before'
                        },
                        {
                            pattern: 'react-*',
                            group: 'external',
                            position: 'before'
                        }
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                    warnOnUnassignedImports: false
                }
            ],
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/no-cycle': [
                'error',
                {
                    maxDepth: 10,
                    ignoreExternal: true
                }
            ],
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ],
            // Regras JSX específicas (migradas do .eslintrc.local.js)
            'react/jsx-max-props-per-line': [
                'warn',
                {maximum: 1, when: 'multiline'}
            ],
            'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
            'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
            'react/jsx-props-no-multi-spaces': 'warn',
            'react/jsx-indent': 'off', // Deixar o Prettier decidir
            'react/jsx-indent-props': 'off', // Deixar o Prettier decidir
            'react/jsx-wrap-multilines': [
                'warn',
                {
                    declaration: 'parens-new-line',
                    assignment: 'parens-new-line',
                    return: 'parens-new-line',
                    arrow: 'parens-new-line',
                    condition: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'ignore' // Não forçar parênteses em propriedades
                }
            ],

            quotes: [
                'warn',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true
                }
            ],
            semi: 'warn',
            'arrow-parens': ['warn', 'always'],
            'comma-dangle': 'off',

            // Regras React
            'react/display-name': 'off',
            'react-hooks/exhaustive-deps': 'off',

            // Regras de qualidade de código
            'prefer-const': 'error',
            'no-var': 'error',
            'no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    ignoreRestSiblings: true
                }
            ],
            'spaced-comment': 'warn',
            camelcase: 'off',
            'no-invalid-this': 'error',
            'no-unused-expressions': 'error',
            'no-debugger': 'error',
            'no-empty-function': 'off',
            'guard-for-in': 'warn',
            'require-jsdoc': 'off',

            // Regras de espaçamento (mantendo compatibilidade com .eslintrc.js antigo)
            'space-in-parens': ['warn', 'never'],
            'array-bracket-spacing': ['warn', 'never'],
            'computed-property-spacing': ['warn', 'never'],
            'object-curly-spacing': ['error', 'never'],

            // Regras de console
            'no-console': ['error', {allow: ['warn', 'error', 'info', 'tron']}],

            // Regras de funções
            'func-style': [
                'error',
                'declaration',
                {
                    allowArrowFunctions: true
                }
            ],
            'new-cap': [
                'error',
                {
                    newIsCap: true,
                    capIsNew: true
                }
            ],
            indent: 'off',
            'max-len': [
                'warn',
                {
                    code: 120,
                    comments: 80,
                    tabWidth: 4,
                    ignoreStrings: true,
                    ignoreComments: true,
                    ignoreTrailingComments: false,
                    ignoreUrls: true,
                    ignoreTemplateLiterals: true
                }
            ],
            'max-depth': [
                'error',
                {
                    max: 4
                }
            ],
            'max-nested-callbacks': [
                'error',
                {
                    max: 4
                }
            ],
            'array-element-newline': 'off',
            'function-call-argument-newline': 'off',
            'function-paren-newline': 'off',
            'prettier/prettier': [
                'error',
                {},
                {
                    usePrettierrc: true
                }
            ]
        }
    },
    {
        files: ['**/*.tsx', '**/*.jsx'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        plugins: {
            react: eslintPluginReact,
            prettier: eslintPluginPrettier,
            import: eslintPluginImport,
            'unused-imports': eslintPluginUnusedImports
        },
        rules: {
            // Regras mais rigorosas para componentes JSX/TSX
            'react/jsx-max-props-per-line': [
                'warn',
                {maximum: 1, when: 'multiline'}
            ]
        }
    },
    {
        files: ['**/*.d.ts', '**/*.d.tsx'],
        rules: {
            'spaced-comment': 'off',
            'unused-imports/no-unused-imports': 'off'
        }
    },
    {
        files: ['**/*.mock.*', '**/mocks/**/*'],
        rules: {
            '@typescript-eslint/no-require-imports': 'off',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off'
        }
    }
];
