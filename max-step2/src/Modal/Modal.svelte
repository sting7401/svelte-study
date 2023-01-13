<script>
    import {createEventDispatcher, onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte';

    export let content = null;

    const dispatch = createEventDispatcher();
    
    let agreed = false;
    let autoScroll = false;

    console.log('scropt ex');

    onMount(() => {
        console.log('mount');
    });

    onDestroy(() => {
        console.log('destroy');
    });

    beforeUpdate(() => {
        console.log('before update');

        autoScroll = agreed;
    });

    afterUpdate(() => {
        console.log('after update');

        if (autoScroll) {const modal = document.querySelector('.modal');

            modal.scrollTo(0, modal.scrollHeight);

        }
    });
</script>

<style>
   
   .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.7);
    z-index: 10;
   }

   .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 80vw;
    padding: 3rem;
    background-color: #fff;
    z-index: 100;
    overflow: auto;
    }

    header {
        border-bottom: 1px solid #000;
    }
</style>

<div class="backdrop" on:click="{() => dispatch('cancel')}"></div>
<div class="modal">
    <header>
        <slot name="header"><!-- optional fallback --></slot>
    </header>
    <div class="content">

        <slot><!-- optional fallback --></slot>
    </div>

    <div class="diclaimer">
        <p>aaa</p>
        <button on:click={() => agreed = true}>agreed</button>
    </div>

   <footer>
    <slot  name="footer" didAgree={agreed}><button on:click={()=> dispatch('close')} disabled={!agreed}>close</button></slot>
   </footer>
</div>