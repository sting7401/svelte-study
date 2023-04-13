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

export const POST = async ({ request }) => {
	// export async function POST(requestEvent) {
	// 	const { request } = requestEvent;
	const { text } = await request.json();
	const newComment = {
		id: comments.length + 1,
		text,
	};
	comments.push(newComment);

	// return new Response(JSON.stringify(newComment), { status: 201 });
	return json(newComment, { status: 201 });
};
