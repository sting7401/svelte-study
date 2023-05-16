<svelte:options immutable={true} />

<script lang="ts">
	import { tick } from 'svelte';
	import type { TodoType, InputInit } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let todoItem: InputInit;
	let showList = true;

	let todoWrap: TodoType[] = [
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		},
		{
			id: uuidv4(),
			title: '1',
			completed: false
		}
	];

	const handleAddTodo = async (event: CustomEvent): void => {
		event.preventDefault();

		todoWrap = [
			...todoWrap,
			{
				id: uuidv4(),
				title: event.detail.title,
				completed: false
			}
		];
		await tick();
		todoItem.clearInput();
	};

	const handleRemoveTodo = (event: CustomEvent): void => {
		event.preventDefault();
		todoWrap = todoWrap.filter((item) => item.id !== event.detail.id);
	};

	const handleToggleTodo = (event: CustomEvent): void => {
		todoWrap = todoWrap.map((item) => {
			if (item.id === event.detail.id) {
				return { ...item, completed: event.detail.value };
			}
			console.log(event.detail.value);

			return { ...item };
		});
	};
</script>

<!-- {todoItem && todoItem.readonly} -->

<label for="checkList">
	<input type="checkbox" name="" id="checkList" bind:checked={showList} />
	<span>show check-list</span>
</label>
{#if showList}
	<div style:max-width="200px;">
		<TodoList
			{todoWrap}
			bind:this={todoItem}
			on:addTodo={handleAddTodo}
			on:removeTodo={handleRemoveTodo}
			on:toggleTodo={handleToggleTodo}
		/>
	</div>
{/if}

<style>
</style>
