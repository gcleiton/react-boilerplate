module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts(x)'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/src/main/config/jest.setup.ts'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}
