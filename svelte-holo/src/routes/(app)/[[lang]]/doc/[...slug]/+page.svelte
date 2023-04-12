<script type="ts">
	import { page } from '$app/stores';

	const slugId = $page.params.slug.split('/');

	console.log($page);
	const { lang = 'ko' } = $page.params;
</script>

<h1>Doc 페이지</h1>

{#if lang === 'ko'}
	<h2>안녕</h2>
{:else if lang === 'en'}
	<h2>hi</h2>
{:else if lang === 'ja'}
	<h2>일본어</h2>
{/if}
