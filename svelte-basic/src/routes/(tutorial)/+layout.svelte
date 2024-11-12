<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<header>header</header>

{@render children?.()}

<footer data-sveltekit-preload-code="hover">footer</footer>

<style>
	header {
		background-color: #0e0e0e;
		color: #fff;
	}

	footer {
		background-color: #0e0e0e;
		color: #fff;
	}
</style>
