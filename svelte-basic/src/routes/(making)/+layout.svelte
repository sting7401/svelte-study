<script lang="ts">
	import '$lib/css/app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Matching Game</title>
</svelte:head>

{@render children?.()}
