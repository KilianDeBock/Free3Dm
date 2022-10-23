module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
    },
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'no-unused-vars': 'off',
    'linebreak-style': 'off',
    'no-return-assign': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'import/no-absolute-path': 'off',
    'react/react-in-tsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/tsx-filename-extension': [
      'warn',
      { extensions: ['.ts', '.tsx', 'ts', 'tsx'] },
    ],
  },
};
