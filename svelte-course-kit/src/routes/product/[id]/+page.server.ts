import type { PageServerLoad } from '../../products/$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, fetch, url }) => {
	const response = await fetch(`https://dummyjson.com/products/${params.id}`);
	const product = response.json();

	if (!response.ok) {
		throw error(404, { message: `failed to fetch product [id]`, code: 'notFound' });
	}

	const comments = fetch(`https://dummyjson.com/comments`).then((res) => {
		return res.json();
	});

	// console.log(comments);

	return {
		product,
		title: product.title,
		description: product.description,
		nested: {
			comments
		}
	};
};

export const prerender = 'auto';
