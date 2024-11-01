<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeToCart } from '$lib/store/cart.js';

	interface Props {
		product?: Product;
	}

	let { product = {
		id: '',
		name: '',
		price: 0
	} }: Props = $props();
	let cart = get(cartItems);
	let cartItemIndex = cart.findIndex((item) => {
		item.id === product.id;
	});
	let cartProduct = $state(cart[cartItemIndex]);
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => {
			item.id === product.id;
		});
		cartProduct = cart[cartItemIndex];

		console.log(cart);
	});
</script>

<div class="card">
	<header class="card-header">
		<h2>{product.name}</h2>
	</header>
	{#if cartProduct}
		<div class="card-body px-4">
			재고 : <strong>4</strong>
		</div>
	{/if}
	<div class="card-body px-4">price: ${product.price}</div>
	<footer class="card-footer">
		<button class="variant-glass-primary rounded p-2" onclick={() => addToCart(product.id)}
			>add</button
		>
		<button class="variant-glass-alert rounded p-2" onclick={() => removeToCart(product.id)}
			>Remove</button
		>
	</footer>
</div>
