<script >
	import Meetup from './Meetup.svelte';
    import Header from '../UI/Header.svelte';
    import MeetupGrid from './MeetupGrid.svelte';
    import TextInput from '../Ui/TextInput.svelte';
    import Button from '../Ui/Button.svelte';
    import EditMeetup from './EditMeetup.svelte';
    
    let id = '';

    let meetups = [
        {
            id: 'm1',
            title: 'title',
            subtitle: 'learn',
            desc: 'desc', 
            imageUrl: 'https://cdn.pixabay.com/photo/2023/01/05/08/17/bird-7698384__340.jpg',
            address: 'new york',
            contactEmail: 'skaldjfk@mail.com',
            isFavor : false,
        },
        {
            id: 'm2',
            title: 'title',
            subtitle: 'learn',
            desc: 'desc',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/01/05/08/17/bird-7698384__340.jpg',
            address: 'new york',
            contactEmail: 'skaldjfk@mail.com',
            isFavor : false,
        },
    ];

    let editMode = null;

    function addMeetup(event) {
        let newMeetup = {
            id: Math.random().toString(),
            title: event.detail.title,
            subtitle: event.detail.subtitle,
            desc: event.detail.desc,
            imageUrl: event.detail.imageUrl,
            address: event.detail.address,
            contactEmail: event.detail.contactEmail,
        };

        //    meetups.push(newMeetup ) // do not
        meetups = [newMeetup, ...meetups];
    }


    function toggleFavorite(event) {

    const id = event.detail;

    const updatedMeetup = { ...meetups.find(m => m.id === id) };
    updatedMeetup.isFavor = !updatedMeetup.isFavor;
    const meetupIndex = meetups.findIndex(m => m.id === id);
    const updatedMeetups = [...meetups];
    updatedMeetups[meetupIndex] = updatedMeetup;
    meetups = updatedMeetups;
  }

  function cancelEdit() {
    editMode = null;
  }
</script>

<style>
main {
    margin-top: 5rem;
}

.meetup-controls {
    margin: 1rem;
}
</style>

<Header></Header>

<main>

    <div class="meetup-controls">
        <Button  on:click={() => editMode= 'add'}>new meetup</Button>
    </div>

    {#if editMode === 'add'}
         <!-- content here -->
         <EditMeetup on:save={addMeetup} on:cancel={cancelEdit}  />
    
    {/if}
    <MeetupGrid {meetups} on:toggleFavorite="{toggleFavorite}" />
</main>




