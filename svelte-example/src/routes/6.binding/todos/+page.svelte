<script>
	let todos = [
		{ done: false, message: '' },
		{ done: false, message: '' },
		{ done: false, message: '' },
	];

	const add = () => {
		todos = [...todos, { done: false, message: '' }];
	};

	const remove = () => {
		todos = todos.filter(item => !item.done);
	};

	$: remain = todos.filter(item => !item.done).length;
</script>

{#each todos as item}
	<div>
		<input type="checkbox" bind:value={item.done} name="" id="" />
		<input type="text" bind:value={item.message} />
	</div>
{/each}

<button type="button" on:click={add}>더하기</button>
<button type="button" on:click={remove}>빼기</button>

<p>{remain}</p>

<style>
</style>
