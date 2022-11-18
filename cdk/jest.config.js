module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/jest_config'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
