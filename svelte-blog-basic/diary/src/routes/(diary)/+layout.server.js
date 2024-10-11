import { supabase } from '$lib/supabaseClient';

/** @type {import('@sveltejs/kit').Load} */
export async function load({ url, params, props, fetch, session, stuff, status, error }) {
	const { data } = await supabase.from('diaries').select().order('id', { ascending: false });

	return {
		diaries: data
	};
}
