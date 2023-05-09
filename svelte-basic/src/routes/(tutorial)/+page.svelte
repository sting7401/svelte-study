<script>
	import { goto, preloadData, preloadCode } from '$app/navigation';

	export let data;
</script>

<style>
</style>

<p>
	{data.currentTime}
</p>
<button
	type="button"
	on:focus="{async () => {
		await preloadData('/products');
	}}"
	on:mouseover="{async () => {
		await preloadCode('/products');
	}}"
	on:click="{() => {
		goto('/products/');
	}}"
	class="border rounded-sm m-3 p-2"
	>go to Product
</button>
