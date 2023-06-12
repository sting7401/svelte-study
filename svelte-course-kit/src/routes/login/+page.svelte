<script lang="ts">
	import type { ActionData } from './$types';
	import { page } from '$app/stores';
	import { enhance, applyAction } from '$app/forms';

	let isLoading = false;
	export let form: ActionData;
	let error = '';

	$: console.log($page.form, $page.status);
</script>

<form
	method="POST"
	action="?/login"
	use:enhance={({ form, data, action, cancel }) => {
		isLoading = true;

		return ({ result, update }) => {
			isLoading = false;
			//update();

			if (result.type === 'failure' || result.type === 'redirect') {
				applyAction(result);
			} else if (result.type === 'error') {
				error = result.error.message;
			}
		};
	}}
>
	{error}
	<div class="flex p-1">
		<label for="username">이름</label>
		<input
			type="text"
			name="username"
			id="username"
			placeholder="username"
			class="border p-1"
			autocomplete="off"
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
			autocomplete="off"
		/>

		{#if form?.passwordMissing}
			<p>password 필요</p>
		{/if}
	</div>
	<div class="p-1">
		<button type="submit" disabled={isLoading}>로그인</button>
	</div>
</form>
