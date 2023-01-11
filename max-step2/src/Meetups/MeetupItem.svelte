<script>
    import {createEventDispatcher} from 'svelte';

	import Button from "../Ui/Button.svelte";



    const dispatch  = createEventDispatcher();
    export let title = null;
    export let subtitle = null;
    export let imageUrl = null;
    export let desc = null;
    export let contactEmail = null;
    export let address = null;
    export let isFavor = null;
</script>

<style>
   article {
    border: 1px solid #ddd;
    margin-top: 1rem;
   }

   .content {
    height: 4rem;
   }
</style>

<article> 
    <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
    </header>

    <div class="image">
        <img src="{imageUrl}" alt="title">
    </div>
    <div class="content">
        <p>{desc}</p>
    </div>
    <footer>

        <Button href="mailto:{contactEmail}" caption="ContactEmail" />
        <Button type="button" caption="{isFavor ? 'UnFavor' : 'favor'}" on:click={() => dispatch('toggleFavorite')} />
        <Button type="button" caption="show" />
    </footer>
</article>