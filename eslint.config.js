import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import pluginReact from 'eslint-plugin-react'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parser: tsParser
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules
    }
  },
  {
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks
    },
    rules: {
      ...pluginReactConfig.rules,
      // 'react-refresh/only-export-components': [
      //   'warn',
      //   { allowConstantExport: true }
      // ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off'
    },
    settings: {
      react: {
        version: 'detect' // Automatically detect the React version
      }
    }
  }
]
