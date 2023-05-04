<script lang="ts">
	import { page } from '$app/stores';

	console.log($page.params.slug);

	const slugArr: string[] = $page.params.slug.split('/');
</script>

<style>
</style>

<p>Docs page</p>
<p>Catch All Routesd</p>
<p>params.slug로 url 체크</p>

{#if slugArr.length === 1}
	<p>{slugArr[0]}</p>
{:else if slugArr.length === 2}
	<p>
		{slugArr[0]}/{slugArr[1]}
	</p>
{/if}
