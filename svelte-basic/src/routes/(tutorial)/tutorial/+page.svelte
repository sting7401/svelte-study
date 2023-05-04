<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

	const handleClick = () => {
		console.log('1');
		goto('/tutorial/products', { replaceState: true });
	};

	beforeNavigate(navigation => {
		console.log({ before: navigation });
	});
	afterNavigate(navigation => {
		console.log({ after: navigation });
	});
</script>

<style>
</style>

<a href="/tutorial/first">first</a>
<a href="/tutorial/products">products</a>

<button on:click="{handleClick}">place order</button>
