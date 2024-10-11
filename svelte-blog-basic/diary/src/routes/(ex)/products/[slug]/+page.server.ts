import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ fetch, params, url, route }) => {
	// console.log(params);
	// console.log(url);
	console.log(route.id);
	const res = await fetch(`http://localhost:4000/products/${params.slug}`);
	const product = await res.json();
	console.log(product);

	if (parseInt(params.slug) > 3) {
		//	throw new Error(`${params.slug}`);
		throw redirect(307, '/products');
		throw error(404, `${params.slug} 제품이 없습니다.`);
	}

	return { product }; //  객체 전달
};
