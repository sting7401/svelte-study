<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { writable } from 'svelte/store';

	// Active Chapter Bindings

	export let index: number = 0 ?? undefined; // Active chapter index binding
	export let id: string = '' ?? undefined; // Active chapter ID binding

	// Activation props

	export let thresholds = 10; // how often to check intersections
	export let activate = 0.8; // min % visible to activate focus
	export let deactivate = 0.2; // max % visible to deactivate focus

	// HTML Props

	export let element = 'article'; // HTML element type of the story
	export let query = '* > .chapter'; // HTML query selector for chapters
	export let root = undefined;
	export let top = 0; // calc. w/ extra container margin
	export let bottom = 0; // calc. w/ extra container margin

	// stores

	let scrollY;
	let innerHeight;

	export const active = writable({ id, index });
	export const window = writable({ scrollY, innerHeight });

	$: id = nodes[index]?.id;

	$: $active.id = id;
	$: $active.index = index;

	setContext('story', { active, window });

	// state

	let container;
	let nodes = [];
	let observers = [];
	let intersects = [];

	// intersections

	const syncIntersects = () => {
		let maxIntersect = 0;
		let maxIndex = 0;
		intersects.forEach((intersect, i) => {
			if (intersect > maxIntersect) {
				maxIntersect = intersect;
				maxIndex = i;
			}
		});
		if (maxIntersect > activate) {
			index = maxIndex;
		} else if (maxIntersect < deactivate) {
			index = undefined;
		}
	};

	// observers

	const observe = (node, index) => {
		observers[index]?.disconnect();
		const observer = new IntersectionObserver(
			(e) => {
				const ratio = e[0].intersectionRatio;
				intersects[index] = ratio;
				syncIntersects();
			},
			{
				root,
				rootMargin: `${-top ?? 0}px 0px ${-bottom ?? 0}px 0px`,
				threshold: Array(thresholds)
					.fill(0)
					.map((_, i, arr) => i / arr.length)
			}
		);
		observer.observe(node);
		observers[index] = observer;
	};

	const observeNodes = () => {
		if (!nodes.length) return;
		nodes.forEach(observe);
	};

	// if your chapters are mounted and unmounted
	// to the DOM, you should call this function
	export const updateNodes = () => {
		nodes = container.querySelectorAll(query);
		observeNodes();
	};

	onMount(() => {
		updateNodes();
	});

	$: top, bottom, observeNodes();

	// window

	$: $window.scrollY = scrollY;
	$: $window.innerHeight = innerHeight;
</script>

<svelte:window bind:scrollY bind:innerHeight />

<svelte:element this={element} bind:this={container}>
	<slot />
</svelte:element>
