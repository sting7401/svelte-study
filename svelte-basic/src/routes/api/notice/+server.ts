import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const post = {
		slug: 'kit',
		content: `<h1>타이틀</h1> <p>서버에서 받아 오는 내용</p>`
	};
	return json(post);
};
