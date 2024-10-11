<script lang="ts">
	type Product = {
		id: string;
		price: string;
		description: string;
	};

	let { data } = $props<{ product: Product }>();
	const { product } = $derived(data);
	const { id, price, description } = product;
	console.log(product);
</script>

<div>
	<h2>{id}</h2>
	<p>{price}</p>
	<p>{description}</p>
</div>
