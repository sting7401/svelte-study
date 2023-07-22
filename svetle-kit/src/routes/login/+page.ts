import type { PageLoad } from './$types';
import { json, error } from '@sveltejs/kit';

export const load: PageLoad = async ({ data }) => {
	return { title: '로그인' };
};
