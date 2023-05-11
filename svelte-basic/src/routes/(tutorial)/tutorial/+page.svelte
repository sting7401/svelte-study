<script>
	import {
		goto,
		preloadData,
		preloadCode,
		beforeNavigate,
		afterNavigate,
	} from '$app/navigation';

	const handleClick = () => {
		console.log('1');
		goto('/products', { replaceState: true });
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

<a href="/first" class="border m-2">first</a>
<a href="/products" class="border m-2">products</a>

<button on:click="{handleClick}" class="border m-2">place order</button>

<button
	on:mouseover="{async () => {
		await preloadData('/products');
	}}"
	class="border m-2">place order- preloadData</button
>

<button
	on:mouseover="{async () => {
		await preloadCode('/products');
	}}"
	class="border m-2">place order- preloadCode</button
>
