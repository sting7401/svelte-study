import type { RequestHandler } from './$types';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, params, cookies }) => {
	const products = await (await import('$lib/dummy-products.json')).default;

	if (error) {
		throw error(404, error.message);
	}

	return json(products, { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	if (product.title) {
		throw error(404, `${product.title} 없음`);
	}

	return json({ id: 1313, title: product.title }, { status: 200 });
};
