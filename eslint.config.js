import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-duplicate-imports': 'error',
      '@typescript-eslint/comma-dangle': 'off',
      'comma-dangle': 'off',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'Literal[value=/^#[0-9A-Fa-f]{2,8}$/]',
          message: 'Do not use hardcoded color values. Use a variable from the color scheme instead.'
        }
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin'
            },
            {
              pattern: 'react-native',
              group: 'builtin'
            },
            {
              pattern: '@storybook/**',
              group: 'external'
            }
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          'newlines-between': 'always'
        }
      ],
      'max-params': ['warn', 3],
      'prefer-arrow-functions/prefer-arrow-functions': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'does']
        }
      ],
      'unicorn/filename-case': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-console': 'error',
      'react/button-has-type': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'react/no-array-index-key': 'off',
      'implicit-arrow-linebreak': 'off',
      'function-paren-newline': 'off',
      'object-curly-newline': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/prop-types': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'no-underscore-dangle': 'off',
      'linebreak-style': 'off',
      'no-confusing-arrow': 'off',
      'react/jsx-curly-newline': 'off',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-array-for-each': 'off',
      '@typescript-eslint/indent': 'off',
      'unicorn/catch-error-name': 'off',
      'operator-linebreak': 'off',
      'no-nested-ternary': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'max-len': [
        'error',
        {
          code: 120
        }
      ],
      'import/no-mutable-exports': 'off',
      'import/no-unresolved': ['error'],
      'import/extensions': 'off',
      'global-require': 'off',
      'unicorn/prefer-module': 'off',
      'no-plusplus': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      indent: 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
);
