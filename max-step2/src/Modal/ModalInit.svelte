<script>
    import {tick} from 'svelte';
    import Product from './Product/Product.svelte';

    let products = [
        {id: 'p1', title: 'A book', price: 9.99}
    ]

    function addToCart(event) {
        console.log(event);
    }

    function delToCart(event) {
       
    }

    let text ='dummy text';

    function transform (event ){
        if(event.which !== 9) {
            return;
        }

        event.preventDefault();

        const selectionStart = event.target.selectionStart;
        const selectionEnd = event.target.selectionEnd;
        const value = event.target.value;

        text = value.slice(0, selectionStart) + 
        value.slice(selectionStart, selectionEnd).toUpperCase() + 
        value.slice(selectionEnd);

        tick().then(() => {
            event.target.selectionStart = selectionStart;
            event.target.selectionEnd = selectionEnd;

        });
    }
</script>

<style>
    /* your styles go here */
</style>

{#each products as product}
<Product {...product} 
    on:add-to-cart="{addToCart}"
    on:delete-cart="{delToCart}"/>
{/each}

<!-- {#each products as {title, price}}
<Product {title} {price} 
    on:add-to-cart="{addToCart}"
    on:delete-cart="{delToCart}"/>
{/each} -->

<textarea name="" id="" cols="30" rows="10" value={text} on:keydown={transform}></textarea>