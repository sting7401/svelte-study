<script>
	import { invalidateAll } from '$app/navigation';

	const logout = async () => {
		const response = await fetch('/api/auth/logout', {
			method: 'POST',
			headers: { accept: 'application/json' }
		});

		if (response.ok) {
			invalidateAll();
		}
	};
</script>

<form action="/api/auth/logout" method="POST" on:submit|preventDefault={logout}>
	<button type="submit">Logout</button>
</form>

<style>
</style>
