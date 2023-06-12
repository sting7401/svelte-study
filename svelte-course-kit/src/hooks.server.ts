import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	const { url, locals, cookies, isDataRequest } = event;

	// if (url.pathname === '/products') {
	// 	return new Response('custom response');
	// }

	if (!isDataRequest && url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		locals.user = token ? { name: 'John', id: 1 } : undefined;
	} else if (url.pathname.startsWith('/hook')) {
		return new Response('custom response');
	}

	const response = await resolve(event);

	// response.headers.set('x-custom-header', 'value');

	return response;
};

export const handle = sequence(handle1);

export const handleFetch: HandleFetch = async ({ request, fetch, event }) => {
	if (request.url.startsWith('http://dummyjson.com')) {
		const cookie = event.request.headers.get('cookie');

		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}

	return fetch(request);
};

export const handleError: HandleServerError = async ({ error, event }) => {
	console.log('this is not responding');
	console.log(error, event);

	return {
		message: error.message,
		code: 'error code 훅'
	};
};
