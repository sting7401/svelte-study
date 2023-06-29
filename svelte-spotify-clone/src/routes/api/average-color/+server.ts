import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url, fetch }) => {
	const imageURL = url.searchParams.get('image');

	if (imageURL) {
		const image = await fetch(imageURL).then((res) => res.arrayBuffer());
		const stats = await sharp(Buffer.from(image)).stats();
	}

	return json({ color: null });
};
