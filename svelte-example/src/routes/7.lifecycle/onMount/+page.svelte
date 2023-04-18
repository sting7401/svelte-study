<script>
	import { onMount } from 'svelte';

	let list = [];

	onMount(async () => {
		const res = await fetch('https://dummyjson.com/products');
		const result = await res.json();
		return (list = [...result.products]);
	});

	const clock = () => {
		alert();
	};
</script>

<div>
	{#each list as { id, title, description, price, images }}
		<div>
			<p>{id}</p>
			<p>{title}</p>
			<p>{description}</p>
			<p>{price}</p>
			{#each images as img}
				<p><img src={img} alt="" /></p>
			{/each}
		</div>
	{/each}
</div>

<style>
</style>
