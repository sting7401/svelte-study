<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import type { Snapshot } from './$types';

	export let data: PageData;

	let username = '';
	let password = '';

	export const snapshot: Snapshot<{ username: string; password: string }> = {
		capture: () => {
			return {
				username,
				password
			};
		},
		restore: (value) => {
			username = value.usernam;
			password = value.password;
		}
	};

	const login = async () => {
		const response = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});

		const loginCheck = await response.json();

		if (response.ok) {
			// goto('/', {
			// 	invalidateAll: true
			// });

			invalidateAll();
		} else {
			alert(loginCheck.message);
		}
	};
</script>

<form action="" on:submit|preventDefault={login}>
	<div class="flex p-1">
		<label for="username">이름</label>
		<input
			type="text"
			name="username"
			id="username"
			placeholder="username"
			class="border p-1"
			bind:value={username}
		/>
	</div>
	<div class="flex p-1">
		<label for="username">비밀번호</label>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="password"
			class="border p-1"
			bind:value={password}
		/>
	</div>
	<div class="p-1">
		<button type="submit">로그인</button>
	</div>
</form>
