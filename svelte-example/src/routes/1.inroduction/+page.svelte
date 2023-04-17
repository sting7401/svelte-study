<script>
	import Nested from '$lib/components/Nested.svelte';

	let name = 'world';
	let src =
		'https://cdn.pixabay.com/photo/2023/04/08/08/38/cat-7908955_960_720.jpg';

	let alt = '고양이';
</script>

<p>{name}</p>

<img {src} {alt} />

<Nested />

<style>
</style>
