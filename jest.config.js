module.exports = {
    'setupFilesAfterEnv': ['./jest.setup.js'],
    'testRegex': '(test|spec)\\.[jt]sx?$',
    'moduleNameMapper': {
        '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
        'next/head': '<rootDir>/__mocks__/next-head.js',
    },
    'testEnvironment': 'jsdom',
    'modulePathIgnorePatterns': [
        '<rootDir>/.next/',
    ],
    'coverageDirectory': './coverage/',
    'collectCoverageFrom': [
        '<rootDir>/src/**/*.js',
    ],
}