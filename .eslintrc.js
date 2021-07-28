module.exports = {
    'extends': '@bamdadsabbagh/eslint-config',
    'plugins': [
        'react-hooks',
        'testing-library',
        'jest-dom',
    ],
    'rules': {
        'react-hooks/rules-of-hooks': ['error'],
        'react-hooks/exhaustive-deps': ['warn'],
    },
}