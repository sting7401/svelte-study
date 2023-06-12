<script lang="ts">
	import { invalidate, invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products.products;

	const noScroll = true;
</script>

<h2 class="mt-5 mb-5">
	{data.title}
</h2>

<button
	on:click={() => {
		// invalidate('http://dummyjson.com/products');
		// invalidate('app:products');
		// invalidateAll();

		// invalidate('/api/products');

		invalidate('app:productsServerLoad');
	}}>다시 시작 function</button
>

{#if products.length > 0}
	<ul class="grid grid-cols-2 grid-cols-fr gap-7" data-sveltekit-preload-data="hover">
		{#each products as item}
			<li class="mb-10">
				<a href="/product/{item.id}" data-sveltekit-noscroll={noScroll ? '' : 'off'}>
					<picture>
						<img src={item.thumbnail} alt={item.title} loading="lazy" class="w-full" />
					</picture>
					<h3>
						{item.title}
					</h3>
					<p>{item.description}</p>
				</a>
			</li>
		{/each}
	</ul>
{/if}

<style>
</style>
