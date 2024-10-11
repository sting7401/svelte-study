import { writable, get } from 'svelte/store';
import { posts } from '$lib/data/posts';
import { formatDate } from '$lib/utils/formatDate';

export const diaries = writable(posts);
export const writing = writable('');
export const editId = writable(0);

export const addDiary = async () => {
	const content = get(writing);

	if (!content) return;
	const res = await fetch('/api/diary', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ content })
	});

	const data = await res.json();

	if (data.success) {
		console.log('성공');
	} else {
		console.error('실패');
	}

	// const newDir = {
	// 	id: Date.now(),
	// 	date: formatDate(),
	// 	content
	// };

	//diaries.update((diaries) => [...diaries, newDir]);
};

export const editDir = async (id = 0) => {
	const content = get(writing);

	if (!content) return;
	const res = await fetch('/api/diary', {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id, content })
	});

	const data = await res.json();

	if (data.success) {
		console.log('수정 성공');
	} else {
		console.error('수정 실패');
	}

	// diaries.update((current) => {
	// 	return current.map((diary) => {
	// 		if (diary.id.toString() === id.toString()) {
	// 			return { ...diary, content: get(writing) };
	// 		} else {
	// 			return diary;
	// 		}
	// 	});
	// });
};

export const delDir = async (id = 0) => {
	const res = await fetch('/api/diary', {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id })
	});

	const data = await res.json();

	if (data.success) {
		console.log('삭제 성공');
	} else {
		console.error('삭제 실패');
	}

	// diaries.update((current) => {
	// 	return current.filter((diary) => diary.id !== id);
	// });
};
