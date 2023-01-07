<script>
	export let iconName;

	const iconNames = `icon-${iconName}`;
</script>

<button type="button" class="button">
	{#if iconName}
		<i class="icon {iconNames}" />
	{/if}

	<slot><!-- optional fallback --></slot>
</button>

<style>
	/* your styles go here */
</style>
