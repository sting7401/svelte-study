import { readable } from 'svelte/store';

let count = 0;

export const readTimer = readable(0, (set) => {
	const interval = setInterval(() => {
		count += 1;

		set(count);
	}, 1000);

	return () => {
		// count = 0;
		clearInterval(interval);
	};
});
