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
	cookies,
	locals
}) => {
	const user = locals.user;

	return { user };
};
