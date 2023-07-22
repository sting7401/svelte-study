module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'svelte3'],
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:promise/recommended',
        'prettier',
        //'prettier/@typescript-eslint',
    ],
    overrides: [
        {
            files: ["**/*.svelte"],
            processor: 'svelte3/svelte3',
        },
    ],
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
    },
    settings: {
        'import/core-modules': ['svelte'],
    },
    rules: {
        'no-console': 'error',
        'no-var': 'error',
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        eqeqeq: 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'import/no-mutable-exports': 0,
        'no-labels': 0,
        'no-restricted-syntax': 0,
        "linebreak-style": ["error", "windows"]
    },
};