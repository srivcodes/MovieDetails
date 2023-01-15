module.exports = {
  rootDir: './',
  transform: {
    '\\.js$': ['babel-jest']
  },
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/shared/components$1',
    '^@hooks(.*)$': '<rootDir>/src/shared/hooks$1',
    '^.+\\.(css|scss)$': '<rootDir>/jest/no-op.js'
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/test-utils/**/*.js'
  ],
  coverageDirectory: '<rootDir>/jest/coverage',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testEnvironment: 'jsdom',
  globals: {
    __DEV__: true,
    __PROD__: false,
    __CLIENT__: true,
    __SERVER__: false,
    __TEST__: true
  }
};
