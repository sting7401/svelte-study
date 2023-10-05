<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let iconName;

	const iconNames = `icon-${iconName}`;

	const eventType = () => {
		dispatch('buttonEvent', '');
	};
</script>

<button type="button" class="button" on:click|preventDefault={eventType}>
	{#if !iconName}
		<i class="icon {iconNames}" />
	{/if}

	<slot><!-- optional fallback --></slot>
</button>

<style>
	/* your styles go here */
</style>
