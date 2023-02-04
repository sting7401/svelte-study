<script>
	import { onDestroy } from 'svelte';
	import cartStore from './cart-store.js';
	import CartItem from './CartItem.svelte';

	// export let items = [{ id: '고유번호', title: '제목', price: '가격' }];

	// let items;

	// const unsubscribeTin = cartStore.subscribe((cartStoreItem) => {
	// 	items = cartStoreItem;
	// });

	// onDestroy(() => {
	// 	if (unsubscribeTin) {
	// 		unsubscribe();
	// 	}
	// });
</script>

<style>
	section {
		width: 30rem;
		max-width: 90%;
		margin: 2rem auto;
		border-bottom: 2px solid #ccc;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>

<!-- <section>
	<h1>카트</h1>
	<ul>
		{#each items as { id, title, price } (id)}
			<CartItem id="{id}" title="{title}" price="{price}" />
		{:else}
			<p>내용이 없습니다.</p>
		{/each}
	</ul>
</section> -->

<section>
	<h1>카트</h1>
	<ul>
		{#each $cartStore as { id, title, price } (id)}
			<CartItem id="{id}" title="{title}" price="{price}" />
		{:else}
			<p>내용이 없습니다.</p>
		{/each}
	</ul>
</section>
