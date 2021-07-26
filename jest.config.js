module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'testRegex': '(test|spec)\\.(.*\\.)?[jt]sx?$',
    'moduleNameMapper': {
        '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    'testEnvironment': 'jsdom',
    'modulePathIgnorePatterns': [
        '<rootDir>/.next/',
    ],
    'collectCoverage': true,
    'coverageDirectory': './coverage/',
}