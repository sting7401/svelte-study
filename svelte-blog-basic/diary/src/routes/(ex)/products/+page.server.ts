import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async ({ fetch }) => {
	console.log('서버 로드');
	const res = await fetch('http://localhost:4000/products');
	const products = await res.json();

	return { products }; //  객체 전달
}) satisfies PageServerLoad;
