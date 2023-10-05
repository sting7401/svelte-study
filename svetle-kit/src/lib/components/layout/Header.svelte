<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const headerList = [
		{ link: '/notice', text: '공지사항' },
		{ link: '/qna', text: '자주 묻는 질문' },
		{ link: '/login', text: '로그인' }
	];

	$: pathUrl = headerList.find((item) => (item.link === $page.url.pathname ? item : ''));
	$: urlRoot = $page.url.pathname;
</script>

<header
	class="flex flex-col items-center w-full mx-auto bg-black"
	class:min-h-[13.25rem]={$page.url.pathname === '/'}
>
	<div class="flex flex-auto justify-between flex-col w-full max-w-[1240px]">
		<div class="flex justify-between items-center px-20">
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

		<div class="flex flex-col items-center px-20" class:bg-white={urlRoot !== '/'}>
			{#if $page.url.pathname === '/'}
				<p class="mb-20 text-24 font-w3 text-white">궁금한 내용을 키워드로 검색해주세요.</p>
			{:else}
				<p class="my-40 text-24 font-w3 text-black">
					{$page.url.pathname !== '/' ? pathUrl.text : ''}
				</p>
			{/if}

			<input type="text" class="w-[26.25rem] h-42 border rounded-[1.3125rem] bg-transparent" />

			<button type="submit">
				<span class="a11y">검색</span>
			</button>
		</div>
	</div>
</header>

<style>
</style>
