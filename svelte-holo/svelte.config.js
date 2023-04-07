import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	preprocess: [
		vitePreprocess(),
		preprocess({
			defaults: {
				style: 'postcss',
			},
			postcss: {
				plugins: [tailwind, autoprefixer],
			},
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
