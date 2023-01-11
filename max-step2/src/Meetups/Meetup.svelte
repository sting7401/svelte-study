<script>
    import Header from "../UI/Header.svelte";
	import MeetupGrid from "./MeetupGrid.svelte";
	import TextInput from "../Ui/TextInput.svelte";
	import Button from "../Ui/Button.svelte";
    
    let id = '';
    let title = '';
    let subtitle= '';
    let imageUrl= '';
    let desc= '';
    let contactEmail= '';
    let address= '';
    

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
        }
    ]

    function addMeetup() {
        let newMeetup = {
            id: Math.random().toString(),
            title: title,
            subtitle: subtitle,
            desc: desc,
            imageUrl: imageUrl,
            address: address,
            contactEmail: contactEmail
        }


       //    meetups.push(newMeetup ) // do not
        meetups = [newMeetup, ...meetups];
    }


function toggleFavorite(e) {
    const id = e.detail;
    const update ={...meetups.find(m => m.id === id)};

    update.isFavor = !update.isFavor;
    const meetupIndex = meetups.findIndex(m => m.id ===id);
    const updateMeetups = [...meetups];
    updateMeetups[meetupIndex] = updateMeetup;
    meetups = updateMeetups;

}
</script>

<style>
main {
    margin-top: 5rem;
}

form {
    width: 30rem;
    max-width: 90%;
    margin: 0 auto;
}
</style>

<Header></Header>

<main>

    <form on:submit|preventDefault="{addMeetup}">
        <TextInput id="title" label="Title" value={title} on:input={event => title = event.target.value} />
        <TextInput id="subtitle" label="subtitle" value={subtitle} on:input={event => subtitle = event.target.value} />
        <TextInput id="address" label="address" value={address} on:input={event => address = event.target.value} />
        <TextInput id="imageUrl" label="imageUrl" value={imageUrl} on:input={event => imageUrl = event.target.value} />
        <TextInput type="email" id="contactEmail" label="contactEmail" value={contactEmail} on:input={event => contactEmail = event.target.value} />
        <TextInput controlType="textarea" id="desc" label="desc" value={desc} rows="30" on:input={event => desc = event.target.value} />

        <!-- <div class="form-control">
            <label for="title">title</label><input type="text" bind:value={title} id="title" />
        </div>
        <div class="form-control">
            <label for="subtitle">subtitle</label><input type="text" bind:value={subtitle} id="subtitle" />
        </div>
        <div class="form-control">
            <label for="desc">desc</label><textarea row="3" id="desc" bind:value={desc} />
        </div>
        <div class="form-control">
            <label for="address">address</label><input type="text" id="address" bind:value={address} />
        </div>
        <div class="form-control">
            <label for="contactEmail">contactEmail</label><input type="email" id="contactEmail" bind:value={contactEmail} />
        </div> -->


        <Button type="submit" caption="save" />
    </form>
<MeetupGrid {meetups} on:toggleFavorite='{toggleFavorite}' />
</main>




