<script lang="ts">
	import { page } from '$app/stores';

	let { data, children } = $props();
	const { username } = data;
</script>

<svelte:head>
	<title>{$page.data.notification || '다르거나'}</title>
</svelte:head>

{#if $page.data.notification}
	<p class="bg-slate-300 rounded-md m-3 p-2">
		알림 배너 {$page.data.notification}
	</p>
{/if}

<p class="text-xl text-gray-800">부모 data 사용 {username}</p>

{@render children?.()}
