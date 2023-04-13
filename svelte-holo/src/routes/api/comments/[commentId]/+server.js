import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments.js';

export function GET(requestEvent) {
	const { params } = requestEvent;
	const { commentId } = params;

	const findComment = comments.find(
		comment => comment.id === parseInt(commentId),
	);

	return json(findComment);
}

export const PATCH = async ({ params, request }) => {
	const { commentId } = params;
	const { text } = await request.json();

	const findComment = comments.find(
		comment => comment.id === parseInt(commentId),
	);

	findComment.text = text;

	return json(findComment);
};

export const DELETE = async ({ params, request }) => {
	const { commentId } = params;
	const deleteComment = comments.find(
		comment => comment.id === parseInt(commentId),
	);
	const index = comments.findIndex(
		comment => comment.id === parseInt(commentId),
	);

	comments.splice(index, 1);

	return json(deleteComment);
};
