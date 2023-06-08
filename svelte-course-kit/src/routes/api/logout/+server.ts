import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = ({ cookies }) => {
	cookies.delete('token', { path: '/' });

	return json({ success: true });
};
