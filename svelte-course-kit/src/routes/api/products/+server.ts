import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, params, cookies, fetch }) => {
	const response = await fetch('https://dummyjson.com/products');

	if (!response.ok) {
		throw error(response.status, response.statusText);
	}

	const products = await response.json();
	return json(products, { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	if (product.title) {
		throw error(404, `${product.title} 없음`);
	}

	return json({ id: 1313, title: product.title }, { status: 200 });
};
