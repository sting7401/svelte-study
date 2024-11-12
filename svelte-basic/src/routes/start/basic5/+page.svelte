<script>
	let list = $state([]);
	const get = async () => {
		const url = 'https://jsonplaceholder.typicode.com/todos/';
		const res = await fetch(url);
		let resData = res.json();

		if (res.ok) {
			return resData;
		} else {
			throw new Error('에러');
		}
	};
</script>

<button type="button" onclick={() => (list = get())}> 가져오기 </button>

{#await list}
	<p>기다림</p>
{:then values}
	{#each values as { userId, id, title, completed } (id)}
		<li>{id} {title} {completed}</li>
	{/each}
{:catch error}
	<!-- promise was rejected -->
	<p>에러남</p>
{/await}
