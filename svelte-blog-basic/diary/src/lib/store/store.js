import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts';
import { formatDate } from '$lib/utils/formatDate';

export const diaries = writable(posts);
export const writing = writable('');
export const editId = writable(0);

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

export const editDir = (id = 0) => {
	diaries.update((current) => {
		return current.map((diary) => {
			if (diary.id.toString() === id.toString()) {
				return { ...diary, content: get(writing) };
			} else {
				return diary;
			}
		});
	});
};
