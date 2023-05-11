<script lang="ts">
	import { page } from '$app/stores';

	export let data;
	const { username } = data;
</script>

<style>
</style>

<svelte:head>
	<title>{$page.data.notification || '다르거나'}</title>
</svelte:head>

{#if $page.data.notification}
	<p class="bg-slate-300 rounded-md m-3 p-2">
		알림 배너 {$page.data.notification}
	</p>
{/if}

<p class="text-xl text-gray-800">부모 data 사용 {username}</p>

<slot />
