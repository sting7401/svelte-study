module.exports = {
	plugins: {
		content: ['./src/**/*.{svelte,js,ts}'],
		tailwindcss: { config: './tailwind.config.js' },
		autoprefixer: {},
	},
};

export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}
    }
};