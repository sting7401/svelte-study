import type { PageServerLoad } from '../$types';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const url = import('$lib/dummy-products.json');
	const products = await (await url).default;
	const product = products.products.find((item) => item.id === +params.id);

	if (!product) {
		throw error(404, `Product not found`);

		// throw redirect(301, '/products');
	}

	return {
		product,
		title: product.title,
		description: product.description
	};
};
