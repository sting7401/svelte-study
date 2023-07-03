<script lang="ts">
	import { Button, LogoutButton } from '$components';
	import { page } from '$app/stores';
	import { invalidate } from '$app/navigation';

	let isRetrying = false;
	const retRoutes = ['/album/[id]'];
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
			<Button element="a" href="/search" className="mx-5">Search</Button>
		</div>
	{/if}
	{#if $page.status === 401}
		<p>Your current session has expired. please logout and login again.</p>
		<LogoutButton variant="solid" />
	{/if}

	{#if [404, 401].includes($page.status) && $page.route.id && retRoutes.includes($page.route.id)}
		<div class="buttons">
			<Button
				element="button"
				disabled={isRetrying}
				on:click={async () => {
					isRetrying = true;
					await invalidate(`app:${$page.route.id}`);
					isRetrying = false;
				}}
			>
				Retry
			</Button>
		</div>
	{/if}
</div>
