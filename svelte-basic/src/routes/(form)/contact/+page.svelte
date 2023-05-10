<script lang="ts">
	import type { PageData } from './$types';
	import { goto, preloadData, preloadCode } from '$app/navigation';

	// export let data: PageData;

	let name = '';
	let email = '';
	let message = '';

	const home = () => {
		goto('/');
	};

	export const snapshot = {
		capture: () => {
			return {
				name,
				email,
				message,
			};
		},
		restore: data => {
			name = data.name;
			email = data.email;
			message = data.message;
		},
	};
</script>

<form method="post">
	<div>
		<input
			type="text"
			name="username"
			id=""
			class="border p-2"
			autocomplete="off"
			placeholder="name"
			bind:value="{name}"
		/>
	</div>
	<div>
		<input
			type="email"
			name="email"
			id=""
			class="border p-2"
			autocomplete="off"
			placeholder="email"
			bind:value="{email}"
		/>
	</div>
	<div>
		<textarea
			name="message"
			id=""
			class="border p-2"
			cols="30"
			rows="10"
			placeholder="message"
			bind:value="{message}"></textarea>
	</div>
	<button type="submit" class="border p-2">로그인</button>

	<button type="button" class="border p-2" on:click="{home}">취소</button>
</form>
