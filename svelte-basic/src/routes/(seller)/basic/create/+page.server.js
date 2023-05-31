import { createPost } from '$lib/server/db.js';

export const actions = {
	default: async ({ request }) => {
		const post = await request.formData();

		const res = await createPost({
			title: post.get('title'),
			body: post.get('body'),
			userId: 1,
		});

		console.log(res);

		return res;
	},
};
