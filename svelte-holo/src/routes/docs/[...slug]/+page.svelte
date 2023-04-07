<script type="ts">
	import { page } from '$app/stores';

	const slugId = $page.params.slug.split('/');

	console.log(slugId);
</script>

<h1>Docs 페이지</h1>

{#if slugId.length === 1}
	<h1>주제 {slugId[0]}</h1>
{:else if slugId.length === 2}
	<h2>소주제 {slugId[1]}</h2>
{/if}
