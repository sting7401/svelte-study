<script>
	import { page, navigating, updated } from '$app/stores';
	const { data } = $props();

	const {
		params: { slug: slugId = 1 }
	} = $page;
</script>

<ul>
	{#each Array.from({ length: 10 }) as _, index}
		<li><a href={`/product/${index}`}>item : {index}</a></li>
	{/each}
</ul>

<h2 class="mt-10 text-2xl font-bold">{slugId} 페이지</h2>
