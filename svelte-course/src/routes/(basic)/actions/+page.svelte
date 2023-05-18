<script>
	import { longPress } from '$lib/actions/longPress.js';

	let showButton = true;
	let duration = 1000;
</script>

<label for="chkAction">
	<input type="checkbox" name="" id="chkAction" bind:checked={showButton} />

	<input type="range" name="" id="" bind:value={duration} min={0} max={4000} step={100} />
</label>

{#if showButton}
	<button
		type="button"
		use:longPress={{ duration }}
		on:longPress={() => {
			alert('클릭');
		}}>액션</button
	>
{/if}

<style>
</style>
