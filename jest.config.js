const config = {
  clearMocks: false,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "ts", "tsx"],
  testMatch: ["**/tests/**/*.+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  preset: "ts-jest",
};

module.exports = {
  projects: [
    {
      displayName: "node",
      testEnvironment: "node",
      ...config,
    },
    {
      displayName: "jsdom",
      testEnvironment: "jsdom",
      ...config,
    },
  ],
};
