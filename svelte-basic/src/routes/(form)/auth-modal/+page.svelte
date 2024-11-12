<script lang="ts">
	let { form } = $props();

	console.log(form);
</script>

<form method="post" action="auth?/login">
	<p>{form?.message || ''}</p>

	<input
		type="text"
		name="username"
		id=""
		class="border p-2"
		autocomplete="off"
	/>
	<input
		type="password"
		name="password"
		id=""
		class="border p-2"
		autocomplete="off"
	/>
	<button type="submit" class="border p-2">로그인</button>
	<button formaction="?/register" class="border p-2">등록</button>
</form>
