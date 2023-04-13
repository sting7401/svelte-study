import { error, redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params, url, route }) => {
	const { urlId } = params;

	if (parseInt(urlId) > 10) {
		throw redirect(307, `/price`);
	}

	if (parseInt(urlId) > 3) {
		throw error(404, `에러페이지`);
	}

	const res = await fetch(`http://localhost:3000/products/${urlId}`);
	const product = await res.json();

	console.log(url, route);

	return { product };
};
