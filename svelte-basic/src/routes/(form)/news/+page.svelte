<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p class="text-lg">오늘의 뉴스</p>
{#each data.news as item}
	<p>{item.title}</p>
{/each}
