import type { PageServerLoad } from './$types';

export const load = (async () => {
	const newsAPIKey = 'you key';

	const news = [
		{ id: 1, title: 'new 1' },
		{ id: 2, title: 'new 2' },
		{ id: 3, title: 'new 3' },
	];

	return { news };
}) satisfies PageServerLoad;
