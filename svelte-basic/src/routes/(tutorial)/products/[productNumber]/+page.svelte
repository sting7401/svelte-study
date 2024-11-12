<script lang="ts">
	import { page } from '$app/stores';

	console.dir(page);
	let productNumber: string = $page.params.productNumber;
</script>

<p>product page {productNumber}</p>
