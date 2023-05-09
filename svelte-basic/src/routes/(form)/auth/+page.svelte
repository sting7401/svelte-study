<script lang="ts">
	let username = '';
	let password = '';
	let message = '';

	const handleSubmit = async () => {
		message = '';

		const res = await fetch('/auth', {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
			}),
		});
		const data = await res.json();
		message = data.message;
	};
</script>

<form on:submit|preventDefault="{handleSubmit}">
	<p>{message}</p>

	<input type="text" name="username" id="" bind:value="{username}" />
	<input type="password" name="password" id="" bind:value="{password}" />
	<button type="submit">로그인</button>
</form>
