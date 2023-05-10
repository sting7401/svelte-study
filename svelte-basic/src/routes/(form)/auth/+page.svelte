<script lang="ts">
	import { redirect } from '@sveltejs/kit';
	// let username = '';
	// let password = '';
	// let message = '';

	// const handleSubmit = async () => {
	// 	message = '';

	// 	const res = await fetch('/auth', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			username,
	// 			password,
	// 		}),
	// 	});
	// 	const data = await res.json();
	// 	message = data.message;
	// };

	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let form;

	const redirectTo = $page.url.searchParams.get('redirectTo') || '/news';
</script>

<!-- <form on:submit|preventDefault="{handleSubmit}">
	<p>{message}</p>
e
	<input
		type="text"
		name="username"
		id=""
		bind:value="{username}"
		class="border p-2"
		autocomplete="off"
	/>
	<input
		type="password"
		name="password"
		id=""
		bind:value="{password}"
		class="border p-2"
		autocomplete="off"
	/>
	<button type="submit" class="border p-2">로그인</button>
</form>
 -->

<form method="post" action="?/login" use:enhance>
	<p>{form?.message || ''}</p>

	<input
		type="text"
		name="username"
		id=""
		class="border p-2"
		autocomplete="off"
		value="{form?.username || ''}"
	/>
	<input
		type="password"
		name="password"
		id=""
		class="border p-2"
		autocomplete="off"
		value="{form?.password || ''}"
	/>
	<button type="submit" class="border p-2">로그인</button>
	<button formaction="?/register" class="border p-2">등록</button>
</form>
