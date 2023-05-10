// import type { PageServerLoad } from './$types';

// export const load = (async () => {
// 	return {};
// }) satisfies PageServerLoad;

import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			// return { message: `이름과 비밀번호를 입력해주세요.` };

			return fail(400, {
				username,
				password,
				message: `이름과 비밀번호를 입력해주세요.`,
			});
		}

		cookies.set('username', username, username, { path: '/' });

		throw redirect(303, url.searchParams.get('redirectTo') || '/news');
		// return { message: '로그인 완료' };
	},
	register: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			// return { message: `이름과 비밀번호를 입력해주세요.` };
			return fail(400, {
				username,
				password,
				message: `이름과 비밀번호를 입력해주세요.`,
			});
		}

		cookies.set('username', username, username, { path: '/' });
		return { message: '로그인 완료' };
	},
};
