<svelte:options immutable={true} />

<script lang="ts">
	import { tick } from 'svelte';
	import type { TodoType, InputInit } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import Button from '$lib/components/Button.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { loadData } from '$lib/utils/fetch';

	let todoItem: InputInit;
	let showList = true;
	let todoWrap: TodoType[] = [];
	let loadingData = loadData('https://jsonplaceholder.typicode.com/todos?_limit=10');
	let promise = loadingData;

	const handleAddTodo = async (event: CustomEvent) => {
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
		console.log(todoWrap);
		todoWrap = todoWrap.map((item) => {
			if (item.id === event.detail.id) {
				return { ...item, completed: event.detail.value };
			}

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
				bind:this={todoItem}
				on:addTodo={handleAddTodo}
				on:removeTodo={handleRemoveTodo}
				on:toggleTodo={handleToggleTodo}
			/>
		</div>
	{:catch error}
		<p>에러 페이지</p>
	{/await}

	<Button
		on:click={() => {
			promise = loadingData;
		}}>새로고침</Button
	>
{/if}

<style>
</style>
