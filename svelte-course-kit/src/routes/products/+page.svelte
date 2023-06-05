<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products.products;

	$: console.log(products);
</script>

<h2 class="mt-5 mb-5">
	{data.title}
</h2>

{#if products.length > 0}
	<ul class="grid grid-cols-2 grid-cols-fr gap-7">
		{#each products as item}
			<li class="mb-10">
				<a href="/products/{item.id}">
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
