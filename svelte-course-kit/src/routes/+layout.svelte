<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import '$lib/css/app.css';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>WEB NAME {$page.data.title} | {$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<main class="p-5">
	{#if data.user}
		<div>
			<p data-login-id={data.user.id}>
				이름 : {data.user.name}
			</p>
		</div>
	{/if}

	<nav class="mt-5 mb-5">
		<a href="/">홈</a>
		<a href="/products">제품</a>
		{#if !data.user}
			<a href="/login">로그인</a>
		{/if}
	</nav>

	{#if data.user}
		<button
			on:click={async () => {
				const response = await fetch('/api/logout', { method: 'POST' });

				if (response.ok) {
					invalidateAll();
				}
			}}
		>
			로그아웃</button
		>
	{/if}

	<slot />
</main>
