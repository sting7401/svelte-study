<script>
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { diaries } from '$lib/store/store';

	/** @type {import('./$types').PageData} */
	export let data;
	// Safely destructure diary, with default empty object
	const diary = data.props.diary || {};
	const { id = 'N/A', content = 'No content available', date = 'No date available' } = diary;
</script>

<h1>보기 {id}</h1>

<!-- 스니펫 정의하기 -->
{#snippet diarySnippet(id, content, date)}
	<div class="mb-[15px] rounded-[1rem] bg-[var(--bg-light)] px-[.9375rem] py-[1rem]">
		<a href={`/read/${id}`}>
			<p>{content}</p>
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

<main>
	{@render diarySnippet(id, content, date)}
</main>
