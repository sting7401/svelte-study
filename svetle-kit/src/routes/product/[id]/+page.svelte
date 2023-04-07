<script>
	import { page } from '$app/stores';
	import ProductHeader from './ProductHeader.svelte'

	$: console.log($page);
</script>

<ProductHeader />

<p>product ID: {$page.params.id}</p>

<a href="/product/3434">other product</a>
