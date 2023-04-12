<script>
	import Header from '$lib/components/Ui/Header.svelte';
</script>

<Header />

<main>
	<slot><!-- optional fallback --></slot>
</main>

<style>
	main {
		margin-top: 5rem;
	}
</style>
