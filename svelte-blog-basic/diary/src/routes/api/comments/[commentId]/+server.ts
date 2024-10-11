import { json } from '@sveltejs/kit';
import { comments } from '$lib/json/comments';
import type { RequestHandler, RequestEvent } from './$types';

export const GET = (async ({ request, url, params }: RequestEvent) => {
	const { commentId } = params;

	const comment = comments.find((comment) => comment.id === parseInt(commentId));

	return json(comment);
}) satisfies RequestHandler;

export const PATCH = (async ({ request, url, params }: RequestEvent) => {
	const { commentId } = params;

	const { text } = await request.json();

	const findComment = comments.find((comment) => comment.id === parseInt(commentId));

	if (!findComment) {
		// comment가 없을 때의 처리, 404 에러를 반환하는 예시
		return json({ error: 'Comment not found' }, { status: 404 });
	}

	findComment.text = text;

	return json(findComment);
}) satisfies RequestHandler;

export const DELETE = (async ({ params }: RequestEvent) => {
	const { commentId } = params;
	const delComment = comments.find((comment) => comment.id === parseInt(commentId));
	const findComment = comments.findIndex((comment) => comment.id === parseInt(commentId));

	comments.splice(findComment, 1);

	return json(delComment);
}) satisfies RequestHandler;
