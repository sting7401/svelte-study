<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';

	const products: Product[] = [
		{ id: '1', name: '커피', price: '4' },
		{ id: '2', name: '커피', price: '4' },
		{ id: '3', name: '커피', price: '4' }
	];
</script>

<div class="container w-full h-full mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>스토어</h1>
		</div>

		{#each products as product}
			<ProductCard {product} />
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary"> 버튼</button>
		</div>
	</div>
</div>

<style>
</style>
