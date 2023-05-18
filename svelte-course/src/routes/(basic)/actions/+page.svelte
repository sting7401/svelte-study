<!-- <script>
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
</style> -->

<!-- //2.  -->
<!-- <script>
	import { onMount } from 'svelte';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';

	let buttonRef;

	onMount(() => {
		tippy('.tooltip', {
			content: 'tool content'
		});

		tippy(buttonRef, {
			content: 'buttonRef'
		});
	});
</script>

<button class="tooltip">버트</button>
<button class="tooltip" data-tippy-content="other">버트</button>
<button class="tooltip--bind" bind:this={buttonRef}>버트</button>

<style>
</style> -->

<script>
	import { tippyUse } from '$lib/actions/tippy.js';

	let content = '안녕';
</script>

<input type="text" bind:value={content} />

<button use:tippyUse={{ content: content, placement: 'right', theme: 'light' }}>액션 버튼 </button>
