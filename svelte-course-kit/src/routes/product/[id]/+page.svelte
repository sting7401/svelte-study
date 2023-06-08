<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.product;
	$: console.log(data.nested);
</script>

<!-- <svelte:head>
	<title>{product.title}</title>
	<meta name="description" content={product.description} />
</svelte:head> -->

<div class="m-5">
	<picture>
		<img src={product?.thumbnail} alt={product?.title} class="w-full" />
	</picture>

	<h3>{product?.title}</h3>
	<p>{product?.description}</p>
</div>

{#await data.nested.comments}
	<p>loading</p>
{:then data}
	{#each data.comments as comment}
		<p>{comment.body}</p>
	{/each}
{/await}
