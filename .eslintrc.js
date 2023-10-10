module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
  },
  extends: ['airbnb-base'],
  rules: {
    'no-console': 'off',
    'consistent-return': 'off',
    'no-unused-expressions': 'off',
  },
};
