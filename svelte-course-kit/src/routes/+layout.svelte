<script lang="ts">
	import '$lib/css/app.css';
	import type { LayoutData } from './$typs';
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
			<p>
				이름 : {data.user.name}, id: {data.user.id}
			</p>
		</div>
	{/if}
	<nav class="mt-5 mb-5">
		<a href="/">홈</a>
		<a href="/products">제품</a>
	</nav>

	<slot />
</main>
