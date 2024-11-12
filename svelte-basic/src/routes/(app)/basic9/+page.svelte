<script>
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { cubicIn } from 'svelte/easing';
	import { fade, slide, scale, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	const progress = tweened(0, {
		delay: 0,
		duration: 700,
		easing: cubicIn,
	});

	//const progress = writable(0);

	setTimeout(() => {
		progress.set(0.5);
	});

	let boxInput = $state();
	let boxs = $state([]);

	const addBox = () => {
		boxs = [...boxs, boxInput.value];
	};

	const discard = value => {
		boxs = boxs.filter(x => x !== value);
	};
</script>

<style>
	.box {
		width: 10rem;
		height: 10rem;
		background-color: #ccc;
		margin: 1rem;
		padding: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
	}
</style>

<progress value="{$progress}"></progress>

<input type="text" name="" id="" bind:this="{boxInput}" />
<button type="button" onclick={addBox}>box 추가</button>

{#each boxs as box (box)}
	<div
		transition:fly="{{
			easing: cubicIn,
			delay: 0,
			duration: 300,
			x: 0,
			y: 200,
		}}"
		onclick={discard.bind(this, box)}
		animate:flip="{{ duration: 300 }}"
		class="box"
	>
		{box}
	</div>
{/each}
