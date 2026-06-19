import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// ─── ESLint Flat Config ────────────────────────────────────────────────────
// Standard Vite + React setup. This file was missing from the project,
// which caused `npm run lint` to fail with "couldn't find eslint.config.js".
export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      // `globals.browser` covers `window`, `document`, etc. used throughout
      // portfolio.js (vanilla DOM helpers) and the JSX components.
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // Allow uppercase-leading constants (e.g. component names) to be unused
      // in destructuring without erroring, matches Vite's default template.
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
