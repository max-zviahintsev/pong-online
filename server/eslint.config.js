import eslintJs from '@eslint/js'
import { configs as tseslintConfigs } from 'typescript-eslint'
import * as parser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
const eslintConfigPrettier = (await import('eslint-config-prettier/flat')).default
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'
import { flatConfigs as eslintPluginImportX } from 'eslint-plugin-import-x'

export default [
  eslintJs.configs.recommended,
  ...tseslintConfigs.recommended,
  eslintPluginImportX.recommended,
  eslintPluginImportX.typescript,
  eslintConfigPrettier,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.json',
        }),
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ignores: ['eslint.config.js', 'dist', 'node_modules/**'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-unused-expressions': 'error',
      'no-fallthrough': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-param-reassign': 'error',
      'no-else-return': 'error',
      'no-useless-return': 'error',
      'no-useless-constructor': 'error',
      'no-duplicate-imports': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-undef': 'off',
    },
  },
]
