<script lang="ts">
	import { getContext } from 'svelte';
	const user = getContext('user');
</script>

<div>
	<h2>Profile</h2>
	<p>username: {user.username}</p>
	<p>email: {user.email}</p>
	<button onclick={() => (user.username = 'jan')}>update name</button>
</div>
