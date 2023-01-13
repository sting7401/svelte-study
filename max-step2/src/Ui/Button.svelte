<script>
	export let type = 'button';
	// export let caption;
	export let href = null;
	export let mode = null;
	export let color = null;
</script>

<style>
</style>

{#if href}
	<a href="{href}"><slot><!-- optional fallback --></slot></a>
{:else}
	<button class="{mode} {color}" type="{type}" on:click
		><slot><!-- optional fallback --></slot></button
	>
{/if}
