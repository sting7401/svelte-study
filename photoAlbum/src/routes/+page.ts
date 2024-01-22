/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url, params, props, fetch, session, stuff, status, error }) => {
	const response = await fetch('/api/images');

	const { data } = await response.json();

	return {
		images: data as Array<{ public_id: string }>
	};
};
