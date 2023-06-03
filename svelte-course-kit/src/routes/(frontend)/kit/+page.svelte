<script>
	import {
		onMount,
		onDestroy,
		beforeUpdate,
		afterUpdate,
		tick,
		setContext,
		getContext,
		hasContext,
		getAllContexts,
		createEventDispatcher
	} from 'svelte';
	import { writable, readable, derived, get, set, readonly } from 'svelte/store';
	import { tweened, spring } from 'svelte/motion';
	import {
		fade,
		blur,
		fadeIn,
		fadeOut,
		fadeInOut,
		fly,
		slide,
		scale,
		draw,
		crossfade,
		flip
	} from 'svelte/animate';
	import {
		ease,
		back,
		bounce,
		circ,
		cubic,
		elastic,
		expo,
		quad,
		quart,
		quint,
		sine
	} from 'svelte/easing';
	require('svelte/register');
</script>
