import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const name = 'hook';
	const response = await resolve(event);

	// 필요한 경우 response를 수정하거나 추가적인 처리를 할 수 있습니다.
	// 예를 들어, headers에 name을 추가할 수 있습니다.
	response.headers.set('X-Hook-Name', name);

	return response;
};
