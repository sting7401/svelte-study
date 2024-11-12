<script lang="ts">
	let { product } = $props();

	const { id = '', title = '', price = '' } = product;
</script>

<div class="p-1">
	<a href={`/products/${id}`} class="p-2"> <p class="text-lg">{title}</p></a>

	<p>{price}</p>
</div>
