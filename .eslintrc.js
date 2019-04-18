module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        'jest': true,
        'browser': true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['jest', '@typescript-eslint', 'prettier'],
    rules: {
      "@typescript-eslint/explicit-function-return-type": 0,
    },
    settings: {
        react: {
            version: 'detect',
            'pragma': "React"
        },
    },
};
