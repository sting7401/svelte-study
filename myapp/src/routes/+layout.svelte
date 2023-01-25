<script>
	let listStep = [{ text: 'step02' }, { text: 'test02' }, { text: 'step03' }];
</script>

<style global lang="postcss">
	/* @tailwind base;
	@tailwind components;
	@tailwind utilities; */
</style>

<!-- markup (zero or more items) goes here -->

<ul>
	{#each listStep as { text }, i}
		<li>
			<a href="{text}">{i + 1} : {text}</a>
		</li>
	{/each}
</ul>

<slot><!-- optional fallback --></slot>
