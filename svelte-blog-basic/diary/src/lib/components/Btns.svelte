<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { diaries, delDir } from '$lib/store/store';

	let { id } = $props();
</script>

<div class="flex items-center justify-between gap-2">
	{#if !$page.url.pathname.startsWith(`/edit`)}
		<button type="button" class="btn" onclick={() => goto(`/edit/${id}`)}>
			<Icon icon="uil:pen" width="24" height="24" class="fill-[#444]" />
		</button>
	{/if}
	<button class="btn"
		><Icon
			icon="mdi:trash-can-outline"
			width="24"
			height="24"
			class="text-[#f80]"
			onclick={async () => {
				await delDir(Number(id));
				location.href = '/';
				//	goto('/');
			}}
		/></button
	>
</div>
