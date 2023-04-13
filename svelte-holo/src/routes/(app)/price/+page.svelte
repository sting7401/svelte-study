<script>
	export let data;
	const products = data.products;

	//console.log(products);
</script>

{#each products as { id, title, description }}
	<div>
		<p>{id}</p>
		<p>{title}</p>
		<p>{description}</p>
	</div>
{/each}
