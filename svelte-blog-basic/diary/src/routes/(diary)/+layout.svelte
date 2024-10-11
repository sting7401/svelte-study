<script>
	import '$lib/css/app.css';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname !== '/'}
	<Header />
{/if}

<slot></slot>

<style lang="scss" global>
	@import '$lib/scss/var.scss';
</style>
