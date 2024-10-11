import type { PageLoad } from './$types';

export const load: PageLoad = (async (loadEvent) => {
	console.log('유니버셜 로드');
	const { fetch } = loadEvent;
	const res = await fetch('http://localhost:4000/products');
	const products = await res.json();

	return { products }; //  객체 전달
}) satisfies PageLoad;
