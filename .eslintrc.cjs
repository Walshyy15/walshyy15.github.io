/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'], tsconfigRootDir: __dirname },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  settings: { 'import/resolver': { typescript: true } },
  rules: {
    'import/order': [
      'warn',
      { 'newlines-between': 'always', groups: [['builtin', 'external', 'internal'], 'parent', 'sibling', 'index'] }
    ]
  },
  ignorePatterns: ['dist', 'node_modules', 'coverage', '**/*.config.*', '.eslintrc.cjs']
};

