<script>
	import { page } from '$app/stores';
	import TextAreaAutosize from '$lib/components/TextAreaAutosize.svelte';
	import { writing, diaries, editId } from '$lib/store/store'; // 스토어 가져오기
	import Icon from '@iconify/svelte';
	import { derived } from 'svelte/store';

	let id = $page.params.id;
	let editDiary = $diaries.find((diary) => diary.id === Number(id));
	let editValue = editDiary?.content;
	let editDate = editDiary?.date;

	$editId = Number(id);

	// 작성 중인 내용을 스토어에서 가져와서 변수에 할당
	$: {
		$writing = String(editValue);
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
			<span>{editDate}</span>
			<button class="btn"
				><Icon icon="mdi:trash-can-outline" width="24" height="24" class="text-[#f80]" /></button
			>
		</div>
	</div>
</main>
