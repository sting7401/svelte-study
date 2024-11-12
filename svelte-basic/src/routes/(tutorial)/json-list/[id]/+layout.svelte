<script lang="ts">
	let { data, children } = $props();

	const username = data.username;
	const pageTitle: string = data.pageTitle;
	const jsProducts = data.jsProducts;
</script>

{@render children?.()}

<h3>{pageTitle} for {username}</h3>

<div class="grid gap-4 grid-cols-3">
	{#each jsProducts as product}
		<div class="border rounded-md m-2 p-2 bg-slate-400">
			<p class="pr-5 text-fuchsia-50">{product.title}</p>
			<p class="pr-5 text-fuchsia-50">{product.description}</p>
		</div>
	{/each}
</div>
