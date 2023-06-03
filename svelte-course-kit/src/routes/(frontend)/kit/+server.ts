import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (({ fetch }) => {
	const res = fetch(url);
	const data = JSON.stringify(res);

	return json({ data: '데이터 가져오기' });
}) satisfies RequestHandler;

export const POST = ({ fetch }) => {};
