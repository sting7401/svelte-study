import { redirect } from '@sveltejs/kit';

export const POST: RequestHandler = ({ cookies }) => {
	cookies.delete('refresh_token', { path: '/' });
	cookies.delete('access_token', { path: '/' });

	if (request.headers.get('accepts' === 'application/json')) {
		return json({ success: true });
	}
	throw redirect(303, '/login');
};
