<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export const keyDisabled = false;

	export let value = '';
	export let text;

	const keyPush = text => {
		if (text === 'clear') {
			value = '';
		} else if (text === 'submit') {
			dispatch('submit');
		} else {
			value += text;
		}
	};
</script>

<button
	type="button"
	class="border rounded-md bg-slate-300 hover:shadow-md"
	on:click|preventDefault={keyPush(text)}
>
	<span class="text-xl text-slate-500 hover:text-red-600">
		{text}
	</span>
</button>

<style>
</style>
