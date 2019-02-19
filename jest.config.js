const config = {
  clearMocks: false,
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  testMatch: [
    '**/tests/**/*.+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  preset: 'ts-jest',
};

module.exports = {
  projects: [
    {
      displayName: "node",
      testEnvironment: 'node',
      ...config,
    },
    {
      displayName: "jsdom",
      testEnvironment: 'jsdom',
      ...config,
    }
  ]
};
