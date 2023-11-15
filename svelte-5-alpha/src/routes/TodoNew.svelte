<script lang="ts">
	let todos = $state<any[]>([]);

	function remaining(todos: any[]) {
		console.log('remaining');
		return todos.filter((todo) => !todo.done).length;
	}

	function addTodo(event) {
		if (event.key !== 'Enter') return;

		let input = event.target as HTMLInputElement;

		let done = $state(false);
		let text = $state(input.value);

		todos = [
			...todos,
			{
				get done() {
					return done;
				},
				set done(value) {
					done = value;
				},
				get text() {
					return text;
				},
				set text(value) {
					text = value;
				}
			}
		];

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
