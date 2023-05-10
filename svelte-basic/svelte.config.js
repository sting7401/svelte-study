import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter({
			// see the 'Deployment configuration' section below
		}),
		prerender: {
			crawl: true,
		},
		// prerender: { crawl: true, entries: ['/'] },
		//prerender: { crawl: false, entries: ['/','json-list/1','json-list/2'] },
	},
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
};

export default config;
