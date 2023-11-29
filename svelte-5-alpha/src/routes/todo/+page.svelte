<script lang="ts">
	type Todo = {
		text: string;
		done: boolean;
	};
	type Filters = 'all' | 'active' | 'completed';

	let todos = $state<Todo[]>([
		{ text: 'todo 1', done: false },
		{ text: 'todo 2', done: false }
	]);
	let filter = $state<Filters>('all');

	let filteredTodos = $derived(filterTodos());

	$effect(() => {
		const savedTodos = localStorage.getItem('todos');

		savedTodos && (todos = JSON.parse(savedTodos));
	});

	$effect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	});

	function addTodo(event: KeyboardEvent) {
		if (event.key !== 'Enter') return;

		const todoEl = event.target as HTMLInputElement;
		const text = todoEl.value;
		const done = false;

		todos = [...todos, { text, done }];

		todoEl.value = '';
	}

	function editTodo(event: Event) {
		const inputEl = event.target as HTMLInputElement;
		const index = +inputEl.dataset.index!;

		todos[index].text = inputEl.value;
	}

	function toggleTodo(event: Event) {
		const inputEl = event.target as HTMLInputElement;
		const index = +inputEl.dataset.index!;

		todos[index].done = !todos[index].done;
	}

	function setFilter(newFilter: Filters) {
		filter = newFilter;
	}

	function filterTodos() {
		switch (filter) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((todo) => !todo.done);
			case 'completed':
				return todos.filter((todo) => todo.done);
		}
	}

	function remaining() {
		return todos.filter((todo) => !todo.done).length;
	}
</script>

<form action="">
	<input type="text" placeholder="add todo" onkeydown={addTodo} />
</form>

<div class="todos grid gap-[1rem] mt-[1rem]">
	{#each filteredTodos as todo, i}
		<div
			class="todo relative flex justify-between items-center rounded-sm transition-opacity"
			class:opacity-50={todo.done}
		>
			<input
				type="text"
				name=""
				id="textInput{i}"
				value={todo.text}
				class="w-full padding-[1rem]"
				data-index={i}
				oninput={editTodo}
			/>
			<input
				type="checkbox"
				name=""
				id="checkInput{i}"
				value={todo.done}
				data-index={i}
				onchange={toggleTodo}
			/>
		</div>
	{/each}
</div>

<div class="filters m-[1rem]">
	<button type="button" class="border px-5 h-10" onclick={() => setFilter('all')}>All</button>
	<button type="button" class="border px-5 h-10" onclick={() => setFilter('active')}>active</button>
	<button type="button" class="border px-5 h-10" onclick={() => setFilter('completed')}
		>completed</button
	>
</div>

<p>{remaining()} remaining</p>
