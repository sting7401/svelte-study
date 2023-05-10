import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load = (async ({ fetch, params, url, route }) => {
	const { id } = params;
	const res = await fetch(`http://localhost:5000/products/${id}`);
	const products = await res.json();
	const pageTitle = '상품 상세';
	const notification = '자식 상세';
	console.log(fetch, params, url, route);

	// if (Number(id) > 3) {
	// 	// throw error(404, {
	// 	// 	message: `${pageTitle}를 열수 없습니다.`,
	// 	// 	hint: `다시 시도해주세요.`,
	// 	// });
	// 	throw redirect(307, '/products');
	// }

	return {
		id,
		pageTitle,
		products,
		notification,
	};
}) satisfies PageServerLoad;

// export const prerender = 'auto';
