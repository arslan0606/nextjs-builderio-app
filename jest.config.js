module.exports = {
  testEnvironment: 'jsdom', // Use JSDOM as test environment
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1', // Map '@' to src folder
  //   '\\.(css|less|scss|sass)$': 'identity-obj-proxy' // Map CSS modules to identity-obj-proxy within the app folder
  // },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map '@' to src folder
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^\\.\\/.*\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], // Ignore files in node_modules and .next folder
  testMatch: ['<rootDir>/__tests__/*.test.js'], // Pattern to find test files
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "nodes"] // Specify module file extensions
};
