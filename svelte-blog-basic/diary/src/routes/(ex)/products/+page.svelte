<script lang="ts">
	let { data } = $props();

	const { products } = data;
</script>

<ul class="space-y-4 divide-y p-5">
	{#each products as product, id}
		<li>
			<h2>{product.title}</h2>
			<h2>{product.description}</h2>
		</li>
	{/each}
</ul>
