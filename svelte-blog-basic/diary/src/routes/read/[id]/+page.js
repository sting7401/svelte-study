/** @type {import('./$types').PageLoad} */
// src/routes/read/[id]/+page.js
import { posts } from '$lib/data/posts'; // Import static data

export async function load({ params }) {
	// Find the specific diary entry by ID
	const diary = posts.find((item) => Number(item.id) === Number(params.id));

	return {
		props: {
			diary: diary || {}
		}
	};
}
