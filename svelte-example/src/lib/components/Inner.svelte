<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const hello = () => {
		dispatch('message', { text: 'Hello' });
	};
</script>

<button on:click={hello}>dispatch</button>
