import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	const { username, password } = data;
	if (!username || !password) {
		return json(
			{ message: `이름과 비밀번호를 입력해주세요.` },
			{ status: 400 },
		);
	}
	cookies.set('username', username, username, { path: '/' });
	return json({ message: '로그인 완료' });
};
