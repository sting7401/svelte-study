<script>
	import '../input.css';
</script>

<style>
	li {
		margin-right: 1rem;
		list-style-type: none;
	}
</style>

<a href="/step02">step02</a>

<nav class="flex">
	{#each Array(12) as _, index (index)}
		<li>
			<a href="basic{index}" class="text-3xl font-bold underline">
				{index}
			</a>
		</li>
	{/each}
</nav>

<slot><!-- optional fallback --></slot>
