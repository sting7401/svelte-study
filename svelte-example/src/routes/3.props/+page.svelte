<script>
	import Info from '$lib/components/Info.svelte';
	import Nested from '$lib/components/Nested.svelte';

	const pkg = {
		name: 'name',
		version: 1,
		speed: 1,
		website: 'web',
	};
</script>

<Nested props="체크" />

<Info {...pkg} />

<style>
</style>
