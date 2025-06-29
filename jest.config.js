module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        '<rootDir>/src/__tests__/setup.ts'
    ],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons']
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '/.expo/',
        '/src/core/config/nativewind/'
    ],
    testMatch: ['**/*.spec.{js,jsx,ts,tsx}'],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/**/*.spec.{ts,tsx}',
        '!src/__tests__/**/*',
        '!src/core/config/nativewind/**/*'
    ],
    coverageDirectory: 'src/__tests__/coverage',
    coverageReporters: ['text', 'lcov', 'html'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@app/(.*)$': '<rootDir>/app/$1',
        '^@mocks/(.*)$': '<rootDir>/src/__tests__/mocks/$1',
        '^@tests/(.*)$': '<rootDir>/src/__tests__/$1',

        // Mock para mensagens do Lingui
        'src/core/config/lingui/locales/pt-BR/messages.mjs':
            '<rootDir>/src/__tests__/mocks/modules/lingui-messages.mock.ts',
        'src/core/config/lingui/locales/en/messages.mjs':
            '<rootDir>/src/__tests__/mocks/modules/lingui-messages.mock.ts',

        // Mock para o macro do Lingui
        '@lingui/core/macro':
            '<rootDir>/src/__tests__/mocks/modules/lingui-macro.mock.ts',

        // Mock para o hook do Lingui
        '@lingui/react':
            '<rootDir>/src/__tests__/mocks/modules/lingui-react.mock.ts',

        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|scss)$':
            '<rootDir>/src/__tests__/mocks/files.mock.ts'
    },
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|expo|@expo|@testing-library|react-native-svg|nativewind))'
    ],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': [
            'babel-jest',
            {configFile: './babel.config.test.js'}
        ]
    },
    globals: {
        'process.env': {
            EXPO_PUBLIC_ENV: 'jest'
        }
    }
};
