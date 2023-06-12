<script lang="ts">
	import '$lib/css/app.css';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';
	import { applyAction, enhance, type SubmitFunction } from '$app/forms';
	import type { ActionData } from './login/$types';

	// console.log({ browser, building, dev, version });

	export let data: LayoutData;
	let isLoading = false;
	let error = '';
	let form: ActionData;

	const handleLoginEnhance: SubmitFunction = () => {
		isLoading = true;
		error = '';
		return ({ result }) => {
			isLoading = false;
			if (result.type === 'redirect') {
				form = null;
				applyAction(result);
			}
			if (result.type === 'error') {
				error = result.error.message;
			}
			if (result.type === 'failure') {
				form = result.data as ActionData;
			}
		};
	};
</script>

<svelte:head>
	<title>WEB NAME {$page.data.title} | {$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<main class="p-5">
	{#if data.user}
		<p>Logged in as {data.user.name}</p>
	{/if}

	<nav class="mt-5 mb-5">
		<a href="/">홈</a>
		<a href="/products">제품</a>
		{#if !data.user}
			<a href="/login" data-sveltekit-preload-data="off">로그인</a>
		{/if}
	</nav>

	{#if data.user}
		<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}" use:enhance>
			<button type="submit"> 로그아웃 </button>
		</form>
	{/if}

	<form action="/search" method="get">
		<input type="text" name="q" class="border" />
	</form>

	<slot />

	{#if !data.user && $page.url.pathname !== '/login'}
		{#if error}
			<p>{error}</p>
			<!-- content here -->
		{/if}
		<!-- content here -->
		<form
			method="POST"
			action="/login?/login&redirectTo={$page.url.pathname}"
			use:enhance={handleLoginEnhance}
		>
			<div class="flex p-1">
				<label for="username">이름</label>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="username"
					class="border p-1"
					value={form?.username || ''}
				/>

				{#if form?.usernameMissing}
					<p>username 필요</p>
				{/if}
			</div>
			<div class="flex p-1">
				<label for="password">비밀번호</label>
				<input
					type="password"
					name="password"
					id="password"
					placeholder="password"
					class="border p-1"
				/>

				{#if form?.passwordMissing}
					<p>password 필요</p>
				{/if}
			</div>
			<div class="p-1">
				<button type="submit">로그인</button>
			</div>
		</form>
	{/if}
</main>
