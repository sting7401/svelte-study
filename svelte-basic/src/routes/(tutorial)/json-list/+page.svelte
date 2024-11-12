<script lang="ts">
	let { data } = $props();
	const products = data.products;
	console.log(products);
	const Component = data.Component;
</script>

<style>
	.product-item {
		min-height: 1rem;
	}
</style>

<div class="grid gap-2">
	{#each products as product}
		<div class="product-item border m-2">
			<Component product="{product}" />
		</div>
	{/each}
</div>
