<script>
	import { onMount } from 'svelte';
	import { auth, isRefresh } from './lib/stores';
	import Router from './router.svelte';

	const REFRESH_TIME = 1000 * 60 * 14;

	onMount(() => {
		const onRefresh = setInterval(() => {
			if ($isRefresh) {
				auth.refresh();
			} else {
				clearInterval(onRefresh);
			}
		}, REFRESH_TIME)
	})
</script>

<div class="main-container">
	<Router />
</div>
