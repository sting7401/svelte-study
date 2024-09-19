<script>
	import { goto } from '$app/navigation';
	//	import { diaries } from '$lib/store/store';
	import Icon from '@iconify/svelte';
	import Btns from '$lib/components/Btns.svelte';
	import { formatDate } from '$lib/utils/formatDate';

	export let data;

	const { diaries: dataDiaries } = data;
	
</script>

<!-- 스니펫 정의하기 -->
{#snippet diarySnippet(id, content, created_at)}
	<div
		class="mb-[15px] grid grid-cols-1 gap-2.5 rounded-[1rem] bg-[var(--bg-light)] px-[.9375rem] py-[1rem]"
	>
		<a href={`/read/${id}`}>
			<p class="whitespace-pre-wrap line-clamp-2">
				{content.length > 50 ? `${content.slice(0, 50)}...` : content}
			</p>
		</a>
		<div class="flex justify-between">
			<span class="color-[var(--text-mid)] text-[14px]">{formatDate(created_at)}</span>
			<Btns {id} />
		</div>
	</div>
{/snippet}

<main class="px-[20px] py-[35px]">
	<!-- 스니펫을 데이터와 함께 렌더링하기 -->
	{#each dataDiaries as diary, index}
		{@render diarySnippet(diary.id, diary.content, diary.created_at)}
	{/each}

	<!-- <button type="button" class="" onclick={() => goto('/write'))}>
		<Icon icon="icon-park-solid:add-one" width="40" height="40" class="text-[#444]" />
	</button> -->

	<a href="/write" class="fixed bottom-[40px] left-1/2 translate-x-[-50%]">
		<Icon icon="icon-park-solid:add-one" width="40" height="40" class="text-[#444]" />
	</a>
</main>
