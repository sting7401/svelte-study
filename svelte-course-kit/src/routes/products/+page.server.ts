import type { PageServerLoad } from './$types';
import { json, error } from '@sveltejs/kit';
// import { env } from '$env/dynamic/private';
// import { env as publicEnv } from '$env/dynamic/public';
// import { API_KEY, TEST } from '$env/static/private';
// import { PUBLIC_KEY, PUBLIC_TEST } from '$env/static/public';

// console.log('$env/dynamic/private', env.TEST);
// console.log('$env/dynamic/private from env', env.API_KEY);
// console.log('public', publicEnv.PUBLIC_TEST, publicEnv.PUBLIC_KEY);
// console.log(API_KEY, TEST);
// console.log(PUBLIC_KEY, PUBLIC_TEST);

import { secret } from '$lib/server/secret/secret';

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
export const prerender = 'auto';
