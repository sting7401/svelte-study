import { writable } from 'svelte/store';

export const productsStore = writable([
	{
		id: 'p11111',
		title: 'A Book',
		price: 9.99,
		desc: 'A great book!'
	},
	{
		id: 'p22222',
		title: 'A Carpet',
		price: 99.99,
		desc: 'Red and green.'
	}
]);
