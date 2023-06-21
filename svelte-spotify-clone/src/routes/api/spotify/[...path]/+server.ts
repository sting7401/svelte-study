import type { RequestHandler } from './$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ fetch, cookies, params }) => {
	const accessToken = cookies.get('access_token');

	const response = await fetch(`${SPOTIFY_BASE_URL}/${params.path}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});

	const result = await response.json();

	return {
		result
	};
};
