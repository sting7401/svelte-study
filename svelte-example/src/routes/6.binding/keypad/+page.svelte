<script>
	import Key from '$lib/components/Key.svelte';

	const keyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'clear', 0, 'submit'];

	let value = '' || 'enter';

	$: sub = value;
</script>

<div class="flex flex-col gap-3 p-4">
	<p class="p-3 border rounded-md bg-white">pin : {value}</p>

	<div class="grid grid-cols-3 gap-3">
		{#each keyNumber as item}
			<Key text={item} on:keyPush={item} bind:value />
		{/each}

		{sub}
	</div>
</div>

<style>
</style>
