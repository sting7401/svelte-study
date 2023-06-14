<script lang="ts">
	import { onDestroy } from 'svelte';

	const onInterval = (call: number, time: number) => {
		const interval = setInterval(call, time);

		onDestroy(() => {
			clearInterval(interval);
		});
	};

	let seconds = 0;

	onInterval(() => (seconds += 1), 1000);
</script>

{seconds}

<style>
</style>
