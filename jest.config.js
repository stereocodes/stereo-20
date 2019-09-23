module.exports = {
  roots: [
    "<rootDir>/src",
    "<rootDir>/tests"
  ],
  setupFilesAfterEnv: ["./tests/setupTests.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|svg|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/config/fileTransform.js",
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|svg|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/config/fileMock.js"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
    "png"
  ],
  collectCoverageFrom: [
    "!<rootDir>/node_modules/**/*"
  ]
}
