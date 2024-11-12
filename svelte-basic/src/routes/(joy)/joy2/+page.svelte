<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<form method="POST" action="?/login" use:enhance class="flex items-center">
	<input type="text" name="name" id="" class="m-2 border rounded-md" />
	<input
		type="password"
		name="password"
		id=""
		class="m-2 border rounded-md"
	/>
	<button type="submit" class="m-2 border rounded-md p-3">인증</button>
</form>
