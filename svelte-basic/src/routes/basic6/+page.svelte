<script>
	import { onDestroy } from 'svelte';
	import { readTimer } from './timer-store.js';
	import Cart from './Cart/Cart.svelte';
	import Products from './Products/Products.svelte';

	const unsubscribe = readTimer.subscribe((count) => {
		console.log('카트' + count);
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});
</script>

<style>
</style>

<p>{$readTimer}</p>
<Cart />
<Products />
