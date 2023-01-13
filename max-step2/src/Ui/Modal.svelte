<script>
    // your script goes here
import  {createEventDispatcher} from 'svelte';
	import Button from "./Button.svelte";

    export let title;
const  dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('cancel');
    }

</script>

<style>
    .modal-backdrop {
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
    margin: 0 auto;
    }

    .content {
        width: 100%;
    }

</style>

<!-- markup (zero or more items) goes here -->
<div class="modal-backdrop" on:click="{closeModal}"></div>
<div class="modal">
    <h1>{title}</h1>
    <div class="content">
        <slot><!-- optional fallback --></slot>
    </div>
    <footer>
        <slot name="footer">
            <Button on:click="{closeModal}">clsoe</Button>
        </slot>
    </footer>
</div>