import type { PageLoad } from './$types';

export const load = (() => {
	return {
		title: 'Profile'
	};
}) satisfies PageLoad;
