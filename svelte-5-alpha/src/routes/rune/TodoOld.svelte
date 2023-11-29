<script lang="ts">
	let todos: any[] = [];

	function remaining(todos: any[]) {
		console.log('remaining');
		return todos.filter((todo) => !todo.done).length;
	}

	function addTodo(event) {
		if (event.key !== 'Enter') return;

		let input = event.target as HTMLInputElement;
		let done = false;
		let text = input.value;

		todos = [...todos, { done, text }];

		console.log(todos);

		input.value = '';
	}
</script>

<div>
	<input type="text" on:keydown={addTodo} />
</div>

<ul>
	{#each todos as todo}
		<li>
			<input type="text" bind:value={todo.text} />

			<input type="checkbox" name="" id="" checked={todo.done} />
		</li>
	{/each}

	<p>{remaining(todos)} remaining</p>
</ul>
