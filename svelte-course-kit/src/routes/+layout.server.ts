import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({
	url,
	params,
	props,
	fetch,
	session,
	stuff,
	status,
	error
}) => {
	const user = { name: 'song', id: 1 };

	return { user };
};
