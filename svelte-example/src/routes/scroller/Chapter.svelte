<script lang="ts">
	import { getContext } from 'svelte';

	export let id; // chapter HTML id
	export let element = 'section'; // chapter HTML element type

	export let visible; // % of the element visible in the container
	export let offset; // % center offset relative to viewport height
	export let intro; // % progress for element intro
	export let outro; // % progress for element outro

	const { active, window } = getContext('story');

	let node;

	$: clientHeight = node?.clientHeight;

	$: top = $window.scrollY - node?.offsetTop;
	$: center = top + $window.innerHeight / 2 - clientHeight / 2;
	$: bottom = -(top - clientHeight + $window.innerHeight);

	$: total = Math.min($window.innerHeight, clientHeight);
	$: visible = (total - Math.max(top, 0) - Math.max(bottom, 0)) / total;

	$: offset = center / ($window.innerHeight / 2);
	$: intro = offset < 0 ? visible : 1;
	$: outro = offset > 0 ? 1 - visible : 0;
</script>

<svelte:element
	this={element}
	{id}
	bind:this={node}
	class="chapter"
	class:active={$active.id == id}
>
	<slot {visible} {offset} {intro} {outro} />
</svelte:element>

<style>
	.active {
		background: var(--color, darkslategray) !important;
	}

	.chapter {
		height: 80vh;
		background: #222;
		margin: 1rem;
		padding: 1rem;
		text-align: center;
		transition: background 500ms;
		display: flex;
		flex-flow: column;
		justify-content: center;
		gap: 1rem;
	}
</style>
