<script lang="ts">
	import { page } from '$app/stores';

	console.dir(page);
	let productNumber: string = $page.params.productNumber;
</script>

<style>
</style>

<p>product page {productNumber}</p>
