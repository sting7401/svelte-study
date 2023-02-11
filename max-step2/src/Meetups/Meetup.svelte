<script>
	import meetups from './meetup-store.js';
	import Meetup from './Meetup.svelte';
	import Header from '../UI/Header.svelte';
	import MeetupGrid from './MeetupGrid.svelte';
	import TextInput from '../Ui/TextInput.svelte';
	import Button from '../Ui/Button.svelte';
	import EditMeetup from './EditMeetup.svelte';
	import MeetupDetail from './MeetupDetail.svelte';

	let id = '';

	// let meetups = [
	// 	{
	// 		id: 'm1',
	// 		title: 'title',
	// 		subtitle: 'learn',
	// 		desc: 'desc',
	// 		imageUrl:
	// 			'https://cdn.pixabay.com/photo/2023/01/05/08/17/bird-7698384__340.jpg',
	// 		address: 'new york',
	// 		contactEmail: 'skaldjfk@mail.com',
	// 		isFavor: false,
	// 	},
	// 	{
	// 		id: 'm2',
	// 		title: 'title',
	// 		subtitle: 'learn',
	// 		desc: 'desc',
	// 		imageUrl:
	// 			'https://cdn.pixabay.com/photo/2023/01/05/08/17/bird-7698384__340.jpg',
	// 		address: 'new york',
	// 		contactEmail: 'skaldjfk@mail.com',
	// 		isFavor: false,
	// 	},
	// ];

	let editMode;
	let editId;
	let page = 'overview';
	let pageData = {};

	// function saveMeetup(event) {
	// 	let meetupData = {
	// 		id: Math.random().toString(),
	// 		title: event.detail.title,
	// 		subtitle: event.detail.subtitle,
	// 		desc: event.detail.desc,
	// 		imageUrl: event.detail.imageUrl,
	// 		address: event.detail.address,
	// 		contactEmail: event.detail.contactEmail,
	// 	};

	// 	//    meetups.push(newMeetup ) // do not
	// 	// meetups = [newMeetup, ...meetups];
	// 	meetups.addMeetups(meetupData);
	// 	editMode = null;
	// }

	// function toggleFavorite(event) {
	// 	const id = event.detail;

	// 	customMeetupStore.toggleFav(id);
	// 	//meetups = updatedMeetups;
	// }

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
</script>

<style>
	main {
		margin-top: 5rem;
	}
</style>

<Header />

<main>
	{#if page === 'overview'}
		{#if editMode === 'edit'}
			<!-- content here -->
			<EditMeetup
				id="{editId}"
				on:save="{savedMeetup}"
				on:cancel="{cancelEdit}"
			/>
		{/if}
		<MeetupGrid
			meetups="{$meetups}"
			on:showDetails="{showDetails}"
			on:edit="{startEdit}"
			on:add="{() => {
				editMode = 'edit';
			}}"
		/>
	{:else}
		<MeetupDetail id="{pageData.id}" on:close="{closeDetails}" />
	{/if}
</main>
