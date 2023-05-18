<script>
	import { settings } from '$lib/stores/setting';

	let colorScheme;

	$: {
		unsubscribe;

		settings.set({ colorScheme });

		settings.update((prev) => ({
			...prev,
			colorScheme
		}));
	}
</script>

<h3>설정 {colorScheme}</h3>

<label for="dark">
	<input type="radio" name="colorScheme" id="dark" value="dark" bind:group={colorScheme} />
	다크
</label>
<label for="light">
	<input type="radio" name="colorScheme" id="light" value="light" bind:group={colorScheme} />
	라이트
</label>

<style>
</style>
