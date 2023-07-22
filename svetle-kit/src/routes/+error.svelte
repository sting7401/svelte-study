<script lang="ts">
	import { page } from '$app/stores';

	import { Button } from '$components';

	let isRetrying = false;
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div class="content text-center">
	<h1 class="text-40">{$page.error?.message}</h1>

	{#if $page.status === 404}
		<p class="text-20">cannot found page</p>

		<div class="buttons mt-40">
			<Button element="a" href="/" className="mx-5">Home</Button>
		</div>
	{/if}
	{#if $page.status === 401}
		<p>Your current session has expired. please logout and login again.</p>
	{/if}
	{#if $page.status === 500}
		<p class="text-20 font-w700">$page.error?.message</p>

		<div class="buttons mt-40">
			<Button element="a" href="/" className="mx-5">Home</Button>
		</div>
	{/if}
</div>
