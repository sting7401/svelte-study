<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<div>
	<h2>로그인</h2>

	<form class="grid rounded-md bg-black/20">
		<input type="text" />
		<input type="password" />

		<button
			type="button"
			onclick={(event) => {
				event.preventDefault();
				goto('/read');
			}}>로그인</button
		>
	</form>
</div>
