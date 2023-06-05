import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ fetch }) => {
	const res = await fetch('https://34.64.54.181:5021/common/test');
	const text = await res.json();

	return json(text, { status: 200 });

	// return new Response(JSON.stringify(products), { status: 200 });
};
