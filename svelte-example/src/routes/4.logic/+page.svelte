<script>
	import { error } from '@sveltejs/kit';

	let user = { login: true };

	const toggle = () => {
		user.login = !user.login;
	};

	let cats = [
		{ id: 'cat0', name: '1' },
		{ id: 'cat1', name: '2' },
		{ id: 'cat2', name: '3' },
	];
	const remove = () => {
		cats = cats.slice(1);
	};

	const url = `https://svelte.dev/tutorial/random-number`;

	const getRandomNumber = async () => {
		const res = await fetch(url);
		const text = await res.text();

		if (res.ok) {
			return text;
		} else {
			throw error(text);
		}
	};
	let promise = getRandomNumber();
	const handleClick = () => {
		promise = getRandomNumber();
	};
</script>

<button type="button" on:click={toggle}>
	{#if user.login}
		out
	{:else}
		in
	{/if}
</button>

<button on:click={remove}>제거</button>
{#each cats as { id, name } (id)}
	<p>
		{id}, {name}
	</p>
{/each}

<button on:click={handleClick}>클릭</button>

{#await promise}
	<p>로딩</p>
{:then number}
	<p>{number}</p>
{:catch error}
	<p>에러 : {error.message}</p>
{/await}

<style>
</style>
