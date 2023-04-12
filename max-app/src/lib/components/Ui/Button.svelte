<script>
	export let type = 'button';
	// export let caption;
	export let href = null;
	export let mode = null;
	export let styleSet = null;
	export let color = null;
	export let disabled = false;
</script>

<style>
</style>

{#if href}
	<a href="{href}"><slot><!-- optional fallback --></slot></a>
{:else}
	<button
		style="{styleSet}"
		class="{mode} {color}"
		type="{type}"
		on:click
		disabled="{disabled}"><slot><!-- optional fallback --></slot></button
	>
{/if}
