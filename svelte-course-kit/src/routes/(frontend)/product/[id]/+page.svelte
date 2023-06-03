<script>
	import { page } from '$app/stores';
	import ProductHeader from './ProductHeader.svelte';

	$: console.log($page);

	export let id = $page.params.id;
</script>

<ProductHeader />

<p>제품 {id}</p>
