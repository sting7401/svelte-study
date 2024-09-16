import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts';
import { formatDate } from '$lib/utils/formatDate';

export const diaries = writable(posts);
export const writing = writable('');

export const addDiary = () => {
	const content = get(writing);

	if (!content) return;

	const newDir = {
		id: Date.now(),
		date: formatDate(),
		content
	};

	diaries.update((diaries) => [...diaries, newDir]);
};
