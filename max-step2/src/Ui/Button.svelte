<script>
    export let type = 'button';
export let caption;
export let href = null;
export let mode = null;
</script>

<style>
    
</style>
{#if href}
    <a {href}>{caption}</a>
{:else}
<button class="{mode}" type={type} on:click>{caption} </button>
{/if}