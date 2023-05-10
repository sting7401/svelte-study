import { json } from '@sveltejs/kit';
import Product from '$lib/components/Product.svelte';

export const GET = async () => {
	const res = await fetch('api/products');
	const products = await res.json();

	const title = '1';
	const notification = '내부 페이지 알림';

	const appPostcodes = postcodes.map(postcode => {
		return {
			buildingName: postcode.building_name,
			line1: postcode.line_1,
			line2: postcode.line_2,
			line3: postcode.line_3,
			town: postcode.post_town,
			country: postcode.country,
			postcode: postcode.postcode,
		};
	});

	// return new Response(JSON.stringify(appPostcodes), {
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });

	return json(appPostcodes);
};
