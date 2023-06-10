import type { PageLoad } from './$types';
import { json, error } from '@sveltejs/kit';
// import { env as publicEnv } from '$env/dynamic/public';
// import { PUBLIC_KEY, PUBLIC_TEST } from '$env/static/public';

// console.log('public', publicEnv.PUBLIC_TEST, publicEnv.PUBLIC_KEY);
// console.log(PUBLIC_KEY, PUBLIC_TEST);

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
