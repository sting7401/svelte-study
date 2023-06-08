import type { PageLoad } from './$types';
import { json } from '@sveltejs/kit';

export const load: PageLoad = async ({
	data,
	event,
	route,
	url,
	parent,
	depends,
	fetch,
	params,
	setHeaders
}) => {
	const urls = import('$lib/dummy-products.json');
	const products = await (await urls).default;

	fetch('http://dummyjson.com/products');
	fetch('http://dummyjson.com/users');

	depends('app:products');

	// const url = '$lib/dummy-products.json';
	// const res = await fetch(url);
	// const products = json(res);

	// console.log(data);
	// console.log(url);
	// console.log(route);
	// console.log(params);
	// console.log(await parent());
	// setHeaders({ age: '100', 'cache-control': 'max-age=604800' });

	return { products: data.products, title: 'Products LIST' };
};
