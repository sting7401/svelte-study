<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
</script>

<div class="grid grid-cols-3">
	<p class="m-2">active: {data.result1.symbol}</p>
	<p class="m-2">gaining: {data.result2.symbol}</p>
	<p class="m-2">losing: {data.result3.symbol}</p>
</div>

<slot><!-- optional fallback --></slot>
