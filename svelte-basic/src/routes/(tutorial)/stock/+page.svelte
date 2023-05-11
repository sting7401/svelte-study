<script lang="ts">
	import type { PageData } from './$types';
	import { invalidate, invalidateAll } from '$app/navigation';

	export let data: PageData;

	const refresh = (): void => {
		console.log('refresh');
		//	invalidate('stocks:active');
		invalidateAll();

		console.log(invalidateAll());
	};

	const stocks = data.stocks;
</script>

{#each stocks as stock}
	<p>{stock.symbol} - {stock.price}</p>
{/each}

<button type="button" on:click="{refresh}">새로고침</button>
