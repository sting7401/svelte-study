<script>
	import { settings } from '$lib/stores/setting';
	import { onDestroy } from 'svelte';

	let colorScheme;

	const unsubscribe = settings.subscribe((settings) => {
		colorScheme = settings.colorScheme;
	});

	onDestroy(unsubscribe);
</script>

<h2>홈 {colorScheme}</h2>
