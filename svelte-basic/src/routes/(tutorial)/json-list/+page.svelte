<script>
	export let data;
	const products = data.products;
	console.log(products);
	const Component = data.Component;
</script>

<style>
</style>

<div class="grid gap-2">
	{#each products as product}
		<div class="border m-2">
			<Component product="{product}" />
		</div>
	{/each}
</div>
