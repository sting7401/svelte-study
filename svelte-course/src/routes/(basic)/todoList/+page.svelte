<svelte:options immutable={true} />

<script lang="ts">
	import { tick, onMount } from 'svelte';
	import type { TodoType, InputInit } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import Button from '$lib/components/Button.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { loadData } from '$lib/utils/fetch';

	let todoItem: InputInit;
	let showList = true;
	let todoWrap: TodoType[];
	let loadingData = loadData<TodoType[]>('https://jsonplaceholder.typicode.com/todos?_limit=20');
	let promise = loadingData;
	let error = null;
	let isLoading = false;

	onMount(() => {
		promise;
	});

	const handleAddTodo = async (event: CustomEvent) => {
		event.preventDefault();
		const URL = 'https://jsonplaceholder.typicode.com/todos';

		fetch(URL, {
			method: 'POST',
			body: JSON.stringify({ title: event.detail.title, completed: false }),
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		}).then((response) => {
			if (response.ok) {
				const todo = await response.json();
			}
		});

		todoWrap = [
			...loadingData,
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
		todoWrap = todoWrap.filter((item) => item.id !== event.detail.id);
	};

	const handleToggleTodo = (event: CustomEvent): void => {
		todoWrap = todoWrap.map((item) => {
			if (item.id === event.detail.id) {
				return { ...item, completed: event.detail.value };
			}
			console.log(item);
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
	{#await promise}
		<p>loading</p>
	{:then todoWrap}
		<div style:max-width="200px;">
			<TodoList
				{todoWrap}
				{error}
				{isLoading}
				bind:this={todoItem}
				on:addTodo={handleAddTodo}
				on:removeTodo={handleRemoveTodo}
				on:toggleTodo={handleToggleTodo}
			/>
		</div>
	{:catch error}
		<p>에러 페이지</p>
	{/await}
{/if}

<style>
</style>
