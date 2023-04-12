import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export const GET = () => {
	// return new Response(JSON.stringify(comments), {
	// 	header: {
	// 		'Content-Type': 'application/json',
	// 	},
	// });

	return json(comments);
};
