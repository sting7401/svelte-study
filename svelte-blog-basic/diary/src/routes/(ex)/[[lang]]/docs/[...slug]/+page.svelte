<script>
	import { page, navigating, updated } from '$app/stores';

	const { data } = $props();
	const {
		params: { lang: langId = 'ko', slug: slugId }
	} = $derived($page);
	const slugArray = $state(slugId.split('/'));
	const joinSlug = () => {
		return slugArray.join(' / ');
	};
	const slugArrayEnd = $derived(joinSlug());
</script>

{JSON.stringify(data)}

<p>
	{#if langId === 'ko'}
		안녕
	{:else if langId === 'en'}
		hello
	{/if}
</p>

{#if slugArray.length === 1}
	<p>{slugArray[0]} 페이지</p>
{:else if slugArray.length === 2}
	<p>{slugArray} 페이지 {slugArrayEnd}</p>
{/if}
