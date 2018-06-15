module.exports = {
    parser: 'babel-eslint',
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        },
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        strict: 0,
        semi: ['error', 'never'],
        quotes: ['error', 'single'],
        //indent: ['error', 4],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
        //'linebreak-style': ['error', 'unix']
    }
}
