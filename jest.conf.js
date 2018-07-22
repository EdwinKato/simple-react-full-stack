module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '\\.(css|scss|styl)$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
  },
  testResultsProcessor: '<rootDir>/node_modules/jest-junit-reporter',
  testPathIgnorePatterns: ['<rootDir>/src/.*/.*-test-utils.js'],
};
