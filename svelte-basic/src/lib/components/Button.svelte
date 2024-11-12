<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let { iconName, children } = $props();

	const iconNames = `icon-${iconName}`;

	const eventType = () => {
		dispatch('buttonEvent', '');
	};
</script>

<button type="button" class="button" onclick={preventDefault(eventType)}>
	{#if !iconName}
		<i class="icon {iconNames}"></i>
	{/if}

	{#if children}{@render children()}{:else}<!-- optional fallback -->{/if}
</button>

<style>
	/* your styles go here */
</style>
