import Product from '$lib/components/Product.svelte';

export const load = async ({ fetch, data }) => {
	const res = await fetch('http://localhost:5000/products');
	const products = await res.json();

	const title = '1';
	const notification = '내부 페이지 알림';

	// return { title, description };

	return { title, products, Component: Product, notification };
};

export const ssr = true;
export const csr = false;
export const prerender = false;
