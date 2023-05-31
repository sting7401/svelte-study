import { redirect } from '@sveltejs/kit';

export const POST = () => {
	console.log('out');

	throw redirect(303, '/basic/login');
};
