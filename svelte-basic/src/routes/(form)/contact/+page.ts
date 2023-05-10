import type { PageLoad } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';
// import { DB_USER, DB_PASSWORD } from '$env/static/private';

export const load = (async () => {
	console.log(`${PUBLIC_BASE_URL}`);
	return {};
}) satisfies PageLoad;
