module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/__tests__/setup.ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.expo/'
  ],
  testMatch: [
    '**/*.spec.{js,jsx,ts,tsx}'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.spec.{ts,tsx}',
    '!src/__tests__/**/*'
  ],
  coverageDirectory: 'src/__tests__/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__tests__/mocks/files.mock.ts'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|expo|@expo|@testing-library|react-native-svg))'
  ]
}; 