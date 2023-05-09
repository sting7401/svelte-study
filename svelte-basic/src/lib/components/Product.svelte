<script>
	export let product;

	const { id = '', title = '', price = '' } = product;
</script>

<style>
</style>

<div class="p-1">
	<a href="{`/products/${id}`}" class="p-2">
		<p class="text-lg">{title}</p></a
	>

	<p>{price}</p>
</div>
