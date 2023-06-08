import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({
	url,
	params,
	props,
	fetch,
	session,
	stuff,
	status,
	error,
	cookies
}) => {
	const token = cookies.get('token');
	const user = { name: 'song', id: 1 };

	return { user: token ? user : null };
};
