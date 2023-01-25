<script>

    import {storeName} from './store.js';

   import Parent from './Parent.svelte';


let name = 'world';

$storeName = name;
</script>

<!-- markup (zero or more items) goes here -->

<h1>app</h1>
<Parent name="{name}"/>

<style>
    /* your styles go here */
</style>