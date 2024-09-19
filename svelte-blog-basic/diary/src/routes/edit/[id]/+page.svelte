<script>
	import { page } from '$app/stores';
	import TextAreaAutosize from '$lib/components/TextAreaAutosize.svelte';
	import { writing, diaries, editId } from '$lib/store/store'; // 스토어 가져오기
	import Icon from '@iconify/svelte';
	import { derived } from 'svelte/store';
	import Btns from '$lib/components/Btns.svelte';
	import { formatDate } from '$lib/utils/formatDate';

	export let data;

	let id = $page.params.id;
	//	let editDiary = $diaries.find((diary) => diary.id === Number(id));
	// let editValue = editDiary?.content;
	// let editDate = editDiary?.date;

	let editDiary = data?.diary[0];
	let editValue = editDiary?.content;
	let editDate = editDiary?.created_at;

	$editId = Number(id);

	$: {
		$writing = editValue;
	}
</script>

<main>
	<div class="p-2.5">
		<!-- TextAreaAutosize component with value binding -->
		<TextAreaAutosize
			bind:value={editValue}
			minRows={4}
			maxRows={40}
			placeholder="글쓰기를 시작하세요."
		/>

		<!-- Display the formatted date -->
		<div class="flex items-center justify-between">
			<span>{formatDate(editDiary?.created_at)}</span>
			<Btns {id} />
		</div>
	</div>
</main>
