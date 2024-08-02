import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import adapter from '@sveltejs/adapter-node';

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    // kit: {
    //     alias: {
    //         $edit: './src/lib/js/edit',
    //         $context: './src/lib/context',
    //         $images: '/src/lib/images',
    //         $style: './src/lib/css',
    //         $common: './src/lib/js/common',
    //         $components: './src/lib/components',
    //         $state: './src/lib/state',
    //         $controller: './src/lib/controller',
    //     },
    //     //  adapter: adapter(),
    // },
};
