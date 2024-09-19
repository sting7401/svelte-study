<script>
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { diaries } from '$lib/store/store';
	import Btns from '$lib/components/Btns.svelte';
	import { formatDate } from '$lib/utils/formatDate';

	export let data;

	// Safely destructure diary, with default empty object
	// const diary = data.props.diary || {};

	const { id } = $page.params;
	//	const diary = $diaries.find((item) => Number(item.id) === Number(id));
	//const { content = '', date = '' } = diary;

	console.log(data);
</script>

<h1>보기 {id}</h1>

<!-- 스니펫 정의하기 -->
{#snippet diarySnippet(id, content, date)}
	<div class="mb-[15px] rounded-[1rem] bg-[var(--bg-light)] px-[.9375rem] py-[1rem]">
		<a href={`/read/${id}`}>
			<p class="whitespace-pre-wrap">{content}</p>
		</a>
		<div class="flex justify-between">
			<span class="color-[var(--text-mid)] text-[14px]">{date}</span>
			<Btns {id} />
		</div>
	</div>
{/snippet}

<main>
	{@render diarySnippet(
		data?.diary[0]?.id,
		data?.diary[0]?.content,
		formatDate(data?.diary[0]?.created_at)
	)}
</main>
