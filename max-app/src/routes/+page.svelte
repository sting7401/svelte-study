<script>
	import { onMount, createEventDispatcher, onDestroy } from 'svelte';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import meetups from '$lib/stores/meetup-store.js';
	import Button from '$lib/components/Ui/Button.svelte';
	import EditMeetup from '$lib/components/meetup/EditMeetup.svelte';
	import MeetupFilet from '$lib/components/meetup/MeetupFilet.svelte';
	import MeetupItem from '$lib/components/meetup/MeetupItem.svelte';

	const dispatch = createEventDispatcher();
	export let fetchData;
	let editMode;
	let editId;
	let pageData = {};
	let isLoading = true;
	let error;
	let favOnly = false;

	console.log(fetchData);

	// const { address, contactEmail, desc, imageUrl, isFavor, subtitle, title } = data;

	$: filterMeetups = favOnly ? meetups.filter((m) => m.isFavor) : fetchData;

	console.log(filterMeetups);

	const setFilter = (event) => {
		favOnly = event.detail === 1;
	};

	onMount(() => {
		meetups.setMeetups(fetchData);
	});

	function savedMeetup() {
		editMode = null;
		editId = null;
	}

	function cancelEdit() {
		editMode = null;
		editId = null;
	}

	function showDetails(event) {
		page = 'details';
		pageData.id = event.detail;
	}

	function closeDetails(event) {
		page = 'overview';
		pageData = {};
	}

	function startEdit(event) {
		editMode = 'edit';
		editId = event.detail;
	}

	function clearError() {
		error = null;
	}
</script>

<svelte:head>
	<title>meetup</title>
</svelte:head>

{#if editMode === 'edit'}
	<!-- content here -->
	<EditMeetup id={editId} on:save={savedMeetup} on:cancel={cancelEdit} />
{/if}
{#if isLoading}
	<p>loading</p>
{:else}
	<section id="meetupControl">
		<Button on:click={() => dispatch('add')}>new meetup</Button>

		<MeetupFilet on:select={setFilter} />
	</section>
	{#if filterMeetups.length === 0}
		<p class="none">없음</p>
	{/if}
	<section id="meetups">
		{#each filterMeetups as meetup (meetup.id)}
			<div transition:scale animate:flip>
				<MeetupItem {...meetup} on:showDetails on:edit />
			</div>
		{/each}
	</section>
{/if}
