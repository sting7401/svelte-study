import { writable } from 'svelte/store';

const hobbies = writable([]);

const customStore = {
	subscribe: hobbies.subscribe,
	setHob: items => {
		hobbies.set(items);
	},
	addHob: hob => {
		hobbies.update(items => {
			return items.concat(hob);
		});
	},
};

export default customStore;
