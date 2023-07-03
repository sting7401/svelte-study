<script>
	import { invalidateAll } from '$app/navigation';
	import { Button } from '$components';

	export let variant = '';

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
	<Button element="button" type="submit" {variant}>Logout</Button>
</form>

<style>
</style>
