<script>
	// import cartStore from '../Cart/cart-store.js';
	import cartStore from './cart-store.js';
	import { productsStore } from '../Products/products-store.js';

	export let id;
	export let title = '';
	export let price = '';

	let showDesc = false;
	let desc = '이용 불가';
	// let fetchProd = [];

	// products.subscribe((props) => {
	// 	fetchProd = props;
	// });

	const displayDesc = () => {
		showDesc = !showDesc;
		// desc = fetchProd.find((item) => {
		// 	item.id === id;
		// }).desc;

		const unsubscribe = productsStore.subscribe((props) => {
			desc = props.find((item) => item.id === id).desc;
		});

		unsubscribe();
	};

	const removeFromCart = () => {
		console.log('제거');

		// cartStore.update((items) => {
		// 	return items.filter((i) => i.id !== id);
		// });
		cartStore.removeItem(id);
	};
</script>

<style>
	li {
		margin: 1rem 0;
		border-radius: 5px;
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		padding: 1rem;
	}

	h1,
	h2 {
		font-size: 1rem;
		margin: 0;
	}

	h2 {
		color: #494949;
		margin-bottom: 1rem;
	}
</style>

<li id="{id}">
	<p>{title}</p>
	<p>{price}</p>
	<button type="button" on:click="{displayDesc}">{showDesc ? '숨김' : '보여줘'}</button>
	<button on:click="{removeFromCart}">제거해줘</button>
	{#if showDesc}
		<p>{desc}</p>
	{/if}
</li>
