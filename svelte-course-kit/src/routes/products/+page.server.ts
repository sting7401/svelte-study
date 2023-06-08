import type { PageServerLoad } from './$types';
import { json, error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({
	parent,
	url,
	route,
	params,
	fetch,
	depends,
	cookies,
	getClientAddress,
	locals,
	platform,
	setHeaders
}) => {
	// const parentUser = await parent();
	// const urls = import('$lib/dummy-products.json');
	// const products = await (await urls).default;
	// const url = '$lib/dummy-products.json';
	// const res = await fetch(url);
	// const products = json(res);
	// return { products, parentUser };

	const response = await fetch('/api/products');
	const products = await response.json();

	depends('app:productsServerLoad');

	if (!response.ok) {
		throw error(response.status, products.message);
	}

	return { products };
};
