<svelte:options immutable="{true}" />

<script lang="ts">
	import { tick } from 'svelte';
	import type { TodoType } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let todoItem;

	let todoWrap: TodoType[] = [
		{
			id: uuidv4(),
			title: '1',
			completed: false,
		},
	];

	const handleAddTodo = event => {
		event.preventDefault();

		todoWrap = [
			...todoWrap,
			{
				id: uuidv4(),
				title: event.detail.title,
				completed: false,
			},
		];
		tick();
		todoItem.clearInput();
	};

	const handleRemoveTodo = event => {
		event.preventDefault();
		todoWrap = todoWrap.filter(item => item.id !== event.detail.id);
	};

	const handleToggleTodo = event => {
		event.preventDefault();

		todoWrap = todoWrap.map(item => {
			if (item.id === event.detail.id) {
				return { ...item, completed: event.detail.value };
			}

			return { ...item };
		});
	};
</script>

<style>
</style>

<!-- {todoItem && todoItem.readonly} -->
<TodoList
	todoWrap="{todoWrap}"
	bind:this="{todoItem}"
	on:addTodo="{handleAddTodo}"
	on:removeTodo="{handleRemoveTodo}"
	on:toggleTodo="{handleToggleTodo}"
/>
