import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(globalIgnores(['dist']), {
    files: ['**/*.{js,ts,tsx}'],
    extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
    ],
    languageOptions: {
        ecmaVersion: 2020,
        globals: {
            ...globals.browser,
            ...globals.node,
        },
    },
    plugins: {
        prettier,
    },
    rules: {
        ...prettier.configs.recommended.rules,
        'prettier/prettier': 'warn',
    },
});
