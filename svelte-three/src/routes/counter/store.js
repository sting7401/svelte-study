import { writable } from 'svelte/store';

const countStore = writable(0);

export { countStore };
