<svelte:options immutable={true} />

<script lang="ts">
	import { tick, onMount } from 'svelte';
	import type { TodoType, InputInit } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let todoItem: InputInit;
	let showList = true;

	let todoWrap: TodoType[];
	let error = null;
	let isAdding = false;
	let isLoading = false;
	let disableItemList = [];

	onMount(() => {
		loadTodoList();
	});

	async function loadTodoList() {
		isLoading = true;
		await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(async (response) => {
			if (response.ok) {
				todoWrap = await response.json();

				console.log(todoWrap);
			} else {
				error = 'An error has occurred';
			}
		});
		isLoading = false;
	}

	const handleAddTodo = async (event: CustomEvent) => {
		event.preventDefault();
		const URL = 'https://jsonplaceholder.typicode.com/todos';

		fetch(URL, {
			method: 'POST',
			body: JSON.stringify({ title: event.detail.title, completed: false }),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		}).then(async (response) => {
			if (response.ok) {
				const todo = await response.json();

				todoWrap = [...todoWrap, { ...todo, id: uuidv4() }];
				await tick();
				todoItem.clearInput();
			}
		});

		isAdding = false;
		await tick();
		todoItem.clearInput();
	};

	const handleRemoveTodo = (event: CustomEvent): void => {
		const id = event.detail.id;

		if (disableItemList.includes(id)) return;
		disableItemList = [...disableItemList, id];

		fetch(`https://jsonplaceholder.typicode.com/todos${id}`, { method: 'DELETE' }).then(
			(response) => {
				if (response.ok) {
					todoWrap = todoWrap.filter((item) => {
						return item.id !== event.detail.id;
					});
				} else {
					alert('에러');
				}
			}
		);

		disableItemList = disableItemList.filter((item) => item.id !== id);
	};

	const handleToggleTodo = async (event: CustomEvent): void => {
		const id = event.detail.id;
		const value = event.detail.value;
		if (disableItemList.includes(id)) return;

		await fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
			method: 'PATCH',
			body: JSON.stringify({ completed: value }),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		}).then((response) => {
			if (response.ok) {
				todoWrap = todoWrap.map((todo) => {
					if (todo.id === event.detail.id) {
						return { ...todo, completed: !event.detail.value };
					}
					return { ...todo };
				});
			} else {
				alert('에러');
			}
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
			{error}
			{isLoading}
			{disableItemList}
			disableAdding={isAdding}
			bind:this={todoItem}
			on:addTodo={handleAddTodo}
			on:removeTodo={handleRemoveTodo}
			on:toggleTodo={handleToggleTodo}
		/>

		<div>슬롯 요소</div>
	</div>
{/if}

<style>
</style>
