<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { TodoType } from '$lib/types/Todo';
	import { createEventDispatcher } from 'svelte';

	export let todoWrap: TodoType[] = [];
	export const readonly = 'only';
	export const clearInput = () => {
		inputText = '';
		inputFocused.focus();
	};
	let inputText = '';
	let inputFocused = false;

	// function handleAddTodo() {
	// 	if (!inputText) return;

	// 	const newTodo: TodoType = {
	// 		id: uuidv4(),
	// 		title: inputText,
	// 		completed: false,
	// 	};

	// 	// todoWrap.push(newTodo);
	// 	// todoWrap = todoWrap;

	// 	todoWrap = [...todoWrap, newTodo];
	// 	inputText = '';
	// }

	//2.
	const dispatch = createEventDispatcher();

	function handleAddTodo() {
		const isNotCancel = dispatch(
			'addTodo',
			{ title: inputText },
			{ cancelable: true },
		);
		if (!isNotCancel) {
			inputText = '';
		}
	}

	const handleRemoveTodo = id => {
		dispatch('removeTodo', {
			id,
		});
	};

	const handleToggleTodo = (id, value) => {
		dispatch('toggleTodo', {
			id,
			value,
		});
	};
</script>

<div class="todos-list-wrap">
	<ul>
		{#each todoWrap as { id = '', title = '', completed = false }, index (id)}
			{@const number = index + 1}
			<li>
				<label>
					<input
						on:input="{event => {
							event.currentTarget.checked = completed;

							handleToggleTodo(id, !completed);
						}}"
						type="checkbox"
						checked="{completed}"
						multiple="{id}"
					/>
					{number}
					{title}
				</label>
				<Button on:click="{() => handleRemoveTodo(id)}">remove</Button>
			</li>
		{/each}
	</ul>
	<p>{inputText}</p>
	<form class="add-todo-form" on:submit|preventDefault="{handleAddTodo}">
		<input
			type="text"
			bind:this="{inputFocused}"
			bind:value="{inputText}"
		/>
		<Button type="submit" disabled="{!inputText}">add</Button>
	</form>
</div>
