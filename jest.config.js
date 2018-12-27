module.exports = {
  clearMocks: false,
  coverageDirectory: "coverage",
  globals: {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  testEnvironment: "node",
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
