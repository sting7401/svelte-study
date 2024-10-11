// @ts-check

import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
	eslint.configs.recommended,
	//...compat.extends('eslint-config-standard'),
	...tseslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	...tailwindPlugin.configs['flat/recommended'],
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	prettierPluginRecommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,svelte}'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				ecmaFeatures: { jsx: true },
				tsconfigRootDir: import.meta.dirname, // (추가 - 현재 모듈의 디렉토리 경로)
				project: ['tsconfig.node.json', 'tsconfig.app.json'],
			},
			globals: { ...globals.browser },
		},
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/'],
		rules: {
			'prettier/prettier': ['warn', { singleQuote: true, semi: true }],
			'react-refresh/only-export-components': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'camelcase': 'off',
		},
	},
);
