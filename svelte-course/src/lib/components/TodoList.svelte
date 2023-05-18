<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { TodoType } from '$lib/types/Todo';
	import { createEventDispatcher, afterUpdate } from 'svelte';

	import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';

	afterUpdate(() => {
		if (autoScroll) {
			listDivRef.scrollTo(0, listDivOffsetHeight);
			autoScroll = false;
		}
	});

	export let todoWrap: TodoType[];
	export const readonly = 'only';
	let inputText = '';
	let inputFocusedRef: HTMLInputElement;
	let listDivRef: HTMLDivElement;
	let autoScroll: boolean;
	let listDivOffsetHeight: number;

	let prevTodoList = todoWrap;
	export let error = null;
	export let isLoading = false;
	export let disableAdding = false;
	export let disableItemList = [];

	$: {
		autoScroll = todoWrap && prevTodoList && todoWrap.length > prevTodoList.length;
		prevTodoList = todoWrap;
	}

	export const clearInput = () => {
		inputText = '';
		inputFocusedRef.focus();
	};

	const dispatch = createEventDispatcher();

	function handleAddTodo() {
		const isNotCancel = dispatch('addTodo', { title: inputText }, { cancelable: true });
		if (!isNotCancel) {
			inputText = '';
		}
	}

	const handleRemoveTodo = ({ id }: TodoType): void => {
		dispatch('removeTodo', {
			id
		});
	};

	const handleToggleTodo = ({ id, value }: TodoType): void => {
		dispatch('toggleTodo', {
			id,
			value
		});
	};
</script>

<div class="todos-list-wrap">
	{#if isLoading}
		<p class="state-text">loading</p>
	{:else if error}
		<p class="state-text">{error}</p>
	{:else if todoWrap}
		<div class="todo-list" bind:this={listDivRef}>
			<div bind:offsetHeight={listDivOffsetHeight}>
				{#if todoWrap.length === 0}
					<p class="no-item">리스트가 없습니다.</p>
				{:else}
					<ul>
						{#each todoWrap as todo, index (todo.id)}
							{@const number = index + 1}
							<!-- {@debug id, title, completed, index} -->
							<!-- {console.log(id, title, completed)} -->
							<slot todo>
								<li class:completed>
									<label for="labelTodo{index}">
										<input
											disabled={disableItemList.includes(todo.id)}
											on:input={(event) => {
												handleToggleTodo(todo.id, todo.completed);
											}}
											type="checkbox"
											id="labelTodo{index}"
											checked={todo.completed}
										/>
										{number}
										{title}
									</label>
									<Button
										class="remove-todo-button"
										aria-label="remove todo"
										on:click={() => handleRemoveTodo(todo.id)}
									>
										<span style:display="inline-block" style:width="10px">
											<FaRegTrashAlt />
										</span>
										remove
									</Button>
								</li>
							</slot>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/if}
	<p>{inputText}</p>
	<form class="add-todo-form" style:display="flex" on:submit|preventDefault={handleAddTodo}>
		<input
			disabled={disableAdding || !todoWrap}
			type="text"
			bind:this={inputFocusedRef}
			bind:value={inputText}
			placeholder="NEW"
		/>
		<Button type="submit" disabled={!inputText || disableAdding || !todoWrap}>add</Button>
	</form>
</div>

<style lang="scss">
	:global(body) {
		margin: 0;
		padding: 0;
	}
	.todos-list-wrap {
		background-color: rgb(207, 208, 248);
	}

	.no-item {
		margin: 0;
		padding: function.rem(15);
		text-align: center;
	}

	.todo-list {
		ul {
			margin: 0;
			padding: function.rem(10);
			list-style: false;

			li {
				display: flex;
				align-items: center;
				position: relative;
				border-radius: function.rem(5);
				margin-bottom: function.rem(5);
				padding: function.rem(10);
				background-color: #303030;
				color: #fff;

				label {
					cursor: pointer;
				}

				input[type='checkbox'] {
					margin: 0 function.rem(10) 0 0;
					cursor: pointer;
				}

				.remove-todo-button {
					margin-left: auto;
				}

				&.completed > label {
					opacity: 0.5;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
