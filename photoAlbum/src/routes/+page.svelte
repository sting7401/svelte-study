<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	export let data;

	console.log(data.images);
</script>

<ul>
	{#each data.images as { public_id }}
		<li><CldImage src={public_id} /></li>
	{/each}
</ul>
