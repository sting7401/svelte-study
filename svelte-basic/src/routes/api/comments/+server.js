import { json } from '@sveltejs/kit';
import { comments } from '$lib/api/comments.js';

// export function GET() {
// 	return Response(JSON.stringify(comments), {
//         header: 'Content-Type','application/json'
//     });
// }

export function GET() {
	return json(comments);
}

export const POST = async ({ request }) => {
	const { text } = await request.json();
	const newComment = {
		id: comments.length + 1,
		text,
	};
	comments.push(newComment);

	return json(newComment, { status: 201 });
};
