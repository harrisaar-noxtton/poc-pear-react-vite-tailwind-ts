import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginReact from 'eslint-plugin-react'
import tsParser from '@typescript-eslint/parser'
import tsEslintPlugin from '@typescript-eslint/eslint-plugin'

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser, 
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        },
        project: './tsconfig.json' 
      }
    },
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      eslint: eslintPlugin,
      '@typescript-eslint': tsEslintPlugin 
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...tsEslintPlugin.configs.recommended.rules,

      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          useTabs: false,
          tabWidth: 2,
          trailingComma: 'none',
          bracketSpacing: true,
          arrowParens: 'always',
          endOfLine: 'auto',
          embeddedLanguageFormatting: 'auto',
          plugins: ['prettier-plugin-tailwindcss']
        }
      ]
    }
  }
]
