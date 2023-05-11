<script lang="ts">
	export let data;

	type prod = {
		id: number;
		title: string;
		price: number;
		description: string;
	};

	const { pageTitle, products } = data;
	const { title = '', price = 0, description = '' } = products;
</script>

<style>
</style>

<h1>{pageTitle}</h1>
<div class="border rounded-sm m-3">
	<h2 class="text-base text-red-700">{title} = ${price}</h2>
	<p class="text-sm">{description}</p>
</div>
