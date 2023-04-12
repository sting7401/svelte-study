<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let selectedButton = 0;
</script>

<style>
</style>

<div>
	<button
		type="button"
		class:active="{selectedButton === 0}"
		on:click="{() => {
			selectedButton = 0;
			dispatch('select', 0);
		}}">all</button
	>
	<button
		type="button"
		class:active="{selectedButton === 1}"
		on:click="{() => {
			selectedButton = 1;
			dispatch('select', 1);
		}}">fac</button
	>
</div>
