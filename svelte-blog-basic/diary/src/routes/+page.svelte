<script>
	import { goto } from '$app/navigation';
	import { diaries } from '$lib/store/store';
	import Icon from '@iconify/svelte';

	$effect(() => {
		console.log($diaries);
	});

	const writeGoto = () => {
		goto('/write');
	};
</script>

<!-- 스니펫 정의하기 -->
{#snippet diarySnippet(id, content, date)}
	<div
		class="mb-[15px] grid grid-cols-1 gap-2.5 rounded-[1rem] bg-[var(--bg-light)] px-[.9375rem] py-[1rem]"
	>
		<a href={`/read/${id}`}>
			<p class="line-clamp-2 whitespace-pre-wrap">
				{content.length > 50 ? `${content.slice(0, 50)}...` : content}
			</p>
		</a>
		<div class="flex justify-between">
			<span class="color-[var(--text-mid)] text-[14px]">{date}</span>
			<div class="flex items-center justify-between gap-2">
				<button class="btn"
					><Icon icon="uil:pen" width="24" height="24" class="text-[#444]" /></button
				>
				<button class="btn"
					><Icon icon="mdi:trash-can-outline" width="24" height="24" class="text-[#f80]" /></button
				>
			</div>
		</div>
	</div>
{/snippet}

<main class="px-[20px] py-[35px]">
	<!-- 스니펫을 데이터와 함께 렌더링하기 -->
	{#each $diaries as diary, index}
		{@render diarySnippet(diary.id, diary.content, diary.date)}
	{/each}

	<!-- <button type="button" class="" onclick={writeGoto}>
		<Icon icon="icon-park-solid:add-one" width="40" height="40" class="text-[#444]" />
	</button> -->

	<a href="/write" class="fixed bottom-[40px] left-1/2 translate-x-[-50%]">
		<Icon icon="icon-park-solid:add-one" width="40" height="40" class="text-[#444]" />
	</a>
</main>
