<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Header />
<h1>password layout group</h1>

{#if children}{@render children()}{:else}<!-- optional fallback -->{/if}

<Footer />
