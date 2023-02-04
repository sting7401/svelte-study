<script>
	import { productsStore } from './products-store.js';
	import ProductsItem from './ProductsItem.svelte';

	// let products = [
	// 	{
	// 		id: 'p1111',
	// 		title: 'A Book',
	// 		price: 9.99,
	// 		description: 'A great book!',
	// 	},
	// 	{
	// 		id: 'p2222',
	// 		title: 'A Carpet',
	// 		price: 99.99,
	// 		description: 'Red and green.',
	// 	},
	// ];
</script>

<style>
	section {
		width: 30rem;
		max-width: 90%;
		margin: 2rem auto;
	}
</style>

<section>
	<h1>Products</h1>
	{#each $productsStore as { id, title, price, desc } (id)}
		<ProductsItem
			id="{id}"
			title="{title}"
			price="{price}"
			description="{desc}"
		/>
	{/each}
</section>
