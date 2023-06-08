import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();

	if (!data.username) {
		throw error(400, '이름이 필요합니다.');
	}

	if (!data.password) {
		throw error(400, '비밀번호가 필요합니다.');
	}

	cookies.set('token', 'token_value', {
		path: '/'
	});

	return json({ name: data.username, id: 1 });
};
