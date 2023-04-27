<script>
	import '../input.css';
</script>

<style>
	li {
		margin-right: 1rem;
		list-style-type: none;
	}
</style>

<nav class="flex hover:">
	{#each Array(12) as _, index (index)}
		<li>
			<a
				href="/start/basic{index}"
				class="text-sm font-bold underline transition animate-bounce hover:text-lg"
			>
				{index}
			</a>
		</li>
	{/each}
	{#each Array(2) as _, i (i)}
		<li>
			<a
				href="/start/step0{i + 1}"
				class="text-sm font-bold underline transition animate-bounce hover:text-lg"
			>
				{i + 1}
			</a>
		</li>
	{/each}
</nav>

<slot><!-- optional fallback --></slot>
