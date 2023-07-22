<script>
	import { createEventDispatcher } from 'svelte';
	import Modal from '../Modal/Modal.js';

	export let title;
	export let price;
	export let bestSeller = false;
	let showModal = false;
	let closeAble = false;

	const dispatch = createEventDispatcher();

	function addToCart() {
		dispatch('add-to-cart', { id: 'p1' });
	}

	function delToCart() {
		dispatch('delete-cart', { id: 'p2' });
	}
</script>

<style>
</style>

<article>
	<h1>{title}</h1>
	<h2>{price}</h2>
	{#if bestSeller}
		<h3>{bestSeller}</h3>
	{/if}

	<button on:click|preventDefault="{addToCart}">add</button>
	<button on:click|preventDefault="{delToCart}">del</button>
</article>

<button on:click="{() => (showModal = true)}">open</button>

{#if showModal}
	<Modal
		content="modal"
		on:cancel="{() => (showModal = false)}"
		on:close="{() => (showModal = false)}"
		let:didAgree="{closeAble}"
	>
		<h1 slot="header">modal</h1>
		<p>text</p>
		<button
			slot="footer"
			on:click="{() => (showModal = false)}"
			disabled="{!closeAble}">close2</button
		>
	</Modal>
{/if}
