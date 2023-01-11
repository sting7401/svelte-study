<script>
	import Meetup from "./Meetup.svelte";
import MeetupItem from "./MeetupItem.svelte";

    export let meetups;
</script>

<style>
   section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    
   }

   @media( min-width: 768px) {
        section {
          grid-template-columns: repeat(2, 1fr);
        }
   }
</style>

<section id="meetups">
    {#each meetups as meetup}
        <MeetupItem 
        if={meetup.id}
        isFavor={meetup.isFavor}
       {...meetup} on:toggleFavorite={meetup.isFavor} />
    {/each}
</section>