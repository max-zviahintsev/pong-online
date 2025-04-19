import eslintJs from '@eslint/js'
import globals from 'globals'
import { configs as tseslintConfigs } from 'typescript-eslint'
import * as parser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
const eslintConfigPrettier = (await import('eslint-config-prettier/flat')).default
import * as reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { flatConfigs as eslintPluginImportX } from 'eslint-plugin-import-x'

export default [
  eslintJs.configs.recommended,
  ...tseslintConfigs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.recommended,
  reactRefresh.configs.vite,
  eslintPluginImportX.recommended,
  eslintPluginImportX.typescript,
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: 'detect',
      },
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: ['tsconfig.app.json', 'tsconfig.node.json'],
        }),
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.js', 'dist'],
    languageOptions: {
      parser,
      parserOptions: {
        project: ['tsconfig.app.json', 'tsconfig.node.json'],
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      prettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [0, 1],
          ignoreEnums: true,
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-nodejs-modules': 'warn',
      'jsx-a11y/alt-text': 'error',
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['src/shared/constants.ts'],
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
    },
  },
]
