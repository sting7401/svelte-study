<script>
	import '../input.css';
</script>

<main class="m-2">
	<h1>Todo list</h1>

	<slot />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
