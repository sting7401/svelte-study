<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let name = '이름';
</script>

<h1>about {name}</h1>

{JSON.stringify($page.params)}

<button
	on:click={async () => {
		await goto('/');
	}}>이동 홈</button
>
