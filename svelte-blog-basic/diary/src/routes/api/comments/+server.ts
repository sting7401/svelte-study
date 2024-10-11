import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';
import { comments } from '$lib/json/comments';
import type { RequestHandler, RequestEvent } from './$types';

export const GET = (async ({ request, url }: RequestEvent) => {
	return json(comments);
}) satisfies RequestHandler;

type NewComment = {
	postId: number;
	id: number;
	name: string;
	email: string;
	text: string;
};

export const POST = (async ({ request }: RequestEvent) => {
	const { name, email, text, postId } = await request.json();
	const newComment: NewComment = {
		postId,
		id: comments.length + 1,
		name,
		email,
		text
	};
	comments.push(newComment);

	// return new Response(JSON.stringify(newComment), { statusCode: 201})

	return json(newComment, { status: 201 });
}) satisfies RequestHandler;

export const PATCH = (({ request }) => {
	return json({});
}) satisfies RequestHandler;

export const DELETE = ((event) => {
	return json({});
}) satisfies RequestHandler;
