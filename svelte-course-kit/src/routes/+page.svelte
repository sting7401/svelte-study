<script lang="ts">
	import { goto, preloadCode, preloadData } from '$app/navigation';
	import { onMount } from 'svelte';

	let data: string[] = [];
	let newMap = new Map();

	onMount(() => {
		setTimeout(() => {
			data = ['data1', 'data2', 'data3'];
		});
	});
</script>

<h1>홈</h1>

{#if data.length}
	<ul>
		{#each data as item}
			<li>{item}</li>
		{/each}
	</ul>
{/if}

<button
	type="button"
	on:click={() => {
		goto('/products');
	}}
	on:mouseover={async () => {
		await preloadData('/products', { noScroll: true });
	}}
	on:focus={async () => {
		await preloadCode('/products');
	}}
>
	제품
</button>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
