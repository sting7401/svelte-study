// import type { LayoutServerLoad } from './$types.js';
// import { error } from '@sveltejs/kit';

// export const load: LayoutServerLoad = async ({
// 	url,
// 	params,
// 	props,
// 	fetch,
// 	session,
// 	stuff,
// 	status,
// 	cookies,
// 	locals
// }) => {
// 	// throw error(401, { message: 'not authorized' });

// 	const user = locals.user;

// 	console.log(user);

// 	return { user };
// };
import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
	const user = locals.user;
	return {
		user
	};
};
