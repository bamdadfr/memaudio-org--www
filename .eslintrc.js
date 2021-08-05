module.exports = {
    'extends': '@bamdadsabbagh/eslint-config',
    'parser': '@typescript-eslint/parser',
    'plugins': [
        'testing-library',
        'jest-dom',
    ],
    'rules': {
        'no-use-before-define': 'off',
    },
}