import { comments } from '$lib/api/comments.js';
import { json } from '@sveltejs/kit';

export const GET = ({ params }) => {
	const { commentId } = params;
	const comment = comments.find((comment) => (comment.id = parseInt(commentId)));

	return json(comment);
};

export const PATCH = async ({ params, request }) => {
	const { commentId } = params;
	const { text } = await request.json();
	const comment = comments.find((comment) => (comment.id = parseInt(commentId)));
	comment.text = text || undefined;
	return json(comment);
};

export const DELETE = async ({ params }) => {
	const { commentId } = params;
	const delComment = comments.find((comment) => (comment.id = parseInt(commentId)));
	const index = comments.findIndex((comment) => (comment.id = parseInt(commentId)));
	comments.splice(index, 1);
	return json(delComment);
};
