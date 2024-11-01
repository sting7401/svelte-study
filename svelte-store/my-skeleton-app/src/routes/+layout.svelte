<script>
	import "../app.css";
	import '$lib/css/tailwind-import.css';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */
	
	/** @type {Props} */
	let { children } = $props();
</script>

<main>
	{@render children?.()}
</main>

<style>
</style>
