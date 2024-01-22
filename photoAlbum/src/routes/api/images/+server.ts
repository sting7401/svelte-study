// import type { RequestHandler } from './$types';

// import { json } from '@sveltejs/kit';

// import cloudinary from 'cloudinary';

// export const GET: RequestHandler = async () => {
// 	try {
// 		const { resources } = await cloudinary.v2.api.resources();

// 		return json({
// 			data: resources.map(({ public_id }: any) => {
// 				return { public_id };
// 			})
// 		});
// 	} catch (error) {
// 		return json({ error: `에러사항: ${error}` }, 500);
// 	}
// };

import { json } from '@sveltejs/kit';
import cloudinary from 'cloudinary';

export async function GET() {
	const { resources } = await cloudinary.v2.api.resources();

	return json({
		data: resources.map(({ public_id }: any) => {
			return { public_id };
		})
	});
}
