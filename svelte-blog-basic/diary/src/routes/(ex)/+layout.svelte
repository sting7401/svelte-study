<script>
	import '$lib/css/app.css';
	import HeaderEx from '$lib/components/HeaderEx.svelte';
	import { page } from '$app/stores';
	let { data } = $props();

	console.dir(data);
</script>

{#if $page.url.pathname !== '/'}
	<HeaderEx />
{/if}

<slot></slot>

<style lang="scss" global>
	@import '$lib/scss/var.scss';
</style>
