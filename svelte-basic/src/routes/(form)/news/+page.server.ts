import type { PageServerLoad } from './$types';
import { DB_USER, DB_PASSWORD } from '$env/static/private';
import { redirect, error } from '@sveltejs/kit';
import { secretKey } from '$lib/server/secrets';

export const load = (async ({ cookies, url }) => {
	console.log({ secretKey });

	if (!cookies.get('username')) {
		throw redirect(307, `/auth?redirectTo=${url.pathname}`);
	}
	const newsAPIKey = 'you key';

	const news = [
		{ id: 1, title: 'new 1' },
		{ id: 2, title: 'new 2' },
		{ id: 3, title: 'new 3' },
	];

	return { news };
}) satisfies PageServerLoad;
