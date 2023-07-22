<script lang="ts">
	import { page } from '$app/stores';

	const headerList = [
		{ link: '/notice', text: '공지사항' },
		{ link: '/qna', text: '자주 묻는 질문' },
		{ link: '/login', text: '로그인' }
	];

	console.log($page);
</script>

<header
	class="flex justify-between flex-col py-10 bg-black"
	class:min-h-[13.25rem]={$page.url.pathname === '/'}
>
	<div class="flex justify-between">
		<div>
			<a href="/" class="text-20 font-w3 text-white">고객센터</a>
		</div>
		<nav>
			<ul>
				{#each headerList as item}
					<a href={item.link} class="p-20 text-13 font-w7 text-white hover:underline">
						{item.text}
					</a>
				{/each}
			</ul>
		</nav>
	</div>

	{#if $page.url.pathname === '/'}
		<div class="flex flex-col items-center">
			<p class="mb-20 text-24 font-w3 text-white">궁금한 내용을 키워드로 검색해주세요.</p>

			<input type="text" class="w-[26.25rem] h-42 border rounded-[1.3125rem] bg-transparent" />

			<button type="submit">
				<span class="a11y">검색</span>
			</button>
		</div>
	{:else}
		<div class="flex flex-col items-center">
			<p class="mb-20 text-24 font-w3 text-white">{$page.url.pathname}</p>

			<input type="text" class="w-[26.25rem] h-42 border rounded-[1.3125rem] bg-transparent" />

			<button type="submit">
				<span class="a11y">검색</span>
			</button>
		</div>
	{/if}
</header>

<style>
</style>
