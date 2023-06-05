/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url, params, props, fetch, session, stuff, status, error }) => {
	const resourceUrl = `api`;
	const res = await fetch(resourceUrl);

	if (res.ok) {
		return {
			status: res.status,
			props: {
				propName: await res.json()
			}
		};
	}

	return {
		status: res.status,
		error: new Error(`Could not load url`)
	};
};

/** @type {import('./$types').Actions} */
export const actions = {};

/** @type {import('@sveltejs/kit').RequestHandler} */
export const get = async ({ clientAddress, locals, params, platform, request, routeId, url }) => {
	const res = await something;

	if (res) {
		return {
			body: {
				res
			}
		};
	}
};

import { json } from '@sveltejs/kit';

/** @type {import('./$types').ParamMatcher */
export function match(param) {
	return;
}

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	return json();
}
