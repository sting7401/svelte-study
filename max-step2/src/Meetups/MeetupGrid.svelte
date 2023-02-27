<script>
	import { createEventDispatcher } from 'svelte';
	import {scale} from 'svelte/transition';
	import {flip} from 'svelte/animate';
	import Button from '../Ui/Button.svelte';
	import MeetupItem from './MeetupItem.svelte';
	import MeetupFilet from './MeetupFilet.svelte';

	export let meetups;
	const dispatch = createEventDispatcher();

	let favOnly = false;

	$: filterMeetups = favOnly ? meetups.filter((m) => m.isFavor) : meetups;

	console.log(meetups);
	const setFilter = (event) => {
		favOnly = event.detail === 1;
	};
</script>

<style>
	section {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}

	@media (min-width: 768px) {
		section {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>

<section id="meetupControl">
	<Button on:click="{() => dispatch('add')}">new meetup</Button>

	<MeetupFilet on:select="{setFilter}" />
</section>

<section id="meetups">
	{#each filterMeetups as meetup (meetup.id)}
		<div transition:scale animate:flip>
			<MeetupItem {...meetup} on:showDetails on:edit />
		</div>
	{/each}
</section>
