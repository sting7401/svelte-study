<script>
    export let controlType = null;
    export let id = null;
    export let label = null;
    export let rows = null;
    export let value = null;
    export let type = 'text';
</script>

<style> 
    label {
        display: block;
        margin-bottom: 0.5rem;
        width: 100%;
    }
    .form-control {
        padding: 0.5rem 0;
        width: 100%;
        margin : 0.25rem 0;
    }
    textarea,input {
        width: 100%;
        border: 1px solid #eee;
        border-bottom: 1px solid #ddd;
    }
</style>


<label for="{id}">{label}</label>
{#if controlType === 'textarea'}
<div class="form-control">
   <textarea row={rows} id="{id}" value={value} on:input/>
</div>
{:else}
<div class="form-control">
    <input {type} id="{id}" value={value} on:input />
</div>
{/if}