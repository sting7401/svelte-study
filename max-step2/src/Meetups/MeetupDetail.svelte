<script>
	import { onDestroy, createEventDispatcher } from 'svelte';
	import meetups from './meetup-store.js';
	import Button from '../Ui/Button.svelte';

	export let id;

	let selectedMeetup;

	const unsubscribe = meetups.subscribe((items) => {
		selectedMeetup = items.find((i) => i.id === id);
	});

	const dispatch = createEventDispatcher();

	onDestroy(() => {
		unsubscribe();
	});
</script>

<style>
</style>

<section>
	<div class="image">
		<img src="{selectedMeetup.imageUrl}" alt="{selectedMeetup.title}" />
	</div>
	<div class="content">
		<h1>{selectedMeetup.title}</h1>
		<h2>{selectedMeetup.subtitle}</h2>
		<p>{selectedMeetup.desc}</p>
		<Button href="mailto:{selectedMeetup.contactEmail}"
			>{selectedMeetup.contactEmail}</Button
		>
		<Button
			type="button"
			mode="outline"
			on:click="{() => dispatch('close')}">close</Button
		>
	</div>
</section>
