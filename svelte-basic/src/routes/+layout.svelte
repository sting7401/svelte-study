<script>
	import '$lib/css/input.css';
</script>

<style>
</style>

<<<<<<< HEAD
=======
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

>>>>>>> 015d45502796f9dbf24e0d51025d4e9e479792af
<slot><!-- optional fallback --></slot>
