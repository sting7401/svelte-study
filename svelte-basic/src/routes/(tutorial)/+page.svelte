<script lang="ts">
	import { goto, preloadData, preloadCode } from '$app/navigation';

	let { data } = $props();
</script>

<p>
	{data.currentTime}
</p>
<button
	type="button"
	onfocus={async () => {
		await preloadData('/products');
	}}
	onmouseover={async () => {
		await preloadCode('/products');
	}}
	onclick={() => {
		goto('/products/');
	}}
	class="border rounded-sm m-3 p-2"
	>go to Product
</button>
