<script>
	import '$lib/css/input.css';

	const basicList = new Array(12);
	const stepList = new Array(2);
</script>

<style>
	li {
		margin-right: 1rem;
		list-style-type: none;
	}
</style>

<nav class="flex hover:">
	{#each basicList as _, index (index)}
		<li>
			<a
				href="/basic{index + 1}"
				class="text-sm font-bold underline transition animate-bounce hover:text-lg"
			>
				{index + 1}
			</a>
		</li>
	{/each}
	{#each stepList as _, i (i)}
		<li>
			<a
				href="/step0{i + 1}"
				class="text-sm font-bold underline transition animate-bounce hover:text-lg"
			>
				{i + 1}
			</a>
		</li>
	{/each}
</nav>

<slot><!-- optional fallback --></slot>
