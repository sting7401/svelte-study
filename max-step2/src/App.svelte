<script>
	import Meetup from './Meetups/Meetup.svelte';

	let showCart = false;

	const showCartButton = () => {
		showCart = !showCart;
	};

	// readTimer.subscribe((count) => {
	// 	console.log(count);
	// });
</script>

<style>
	/* your styles go here */
</style>

<Meetup />
