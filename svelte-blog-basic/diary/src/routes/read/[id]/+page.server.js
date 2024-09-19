/** @type {import('./$types').PageLoad} */
// src/routes/read/[id]/+page.js
import { posts } from '$lib/data/posts'; // Import static data
import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	// Find the specific diary entry by ID

	const { data } = await supabase.from('diaries').select().eq('id', params.id);

	console.log(data);

	// return {
	// 	// props: {
	// 	// 	diary: diary || {}
	// 	// }
	// 	diaries: data
	// };

	return {
		diary: data
	};
}
