import { writable } from 'svelte/store';

const settings = writable({
	colorScheme: 'dark',
	lang: 'en',
	fontSize: 12
});

export { settings };
