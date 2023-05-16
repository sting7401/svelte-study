<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import type { TodoType } from '$lib/types/Todo';
	import {
		createEventDispatcher,
		onMount,
		onDestroy,
		beforeUpdate,
		afterUpdate,
		tick
	} from 'svelte';

	onMount(() => {
		console.log('onMount');

		return () => {
			console.log('onMount2');
		};
	});

	onDestroy(() => {
		console.log('onDestroy');
	});

	beforeUpdate(() => {
		if (listDiv) {
			console.log(listDiv.offsetHeight);
		}
	});
	afterUpdate(() => {
		if (autoScroll) {
			console.log(listDivOffsetHeight);
			listDiv.scrollTo(0, listDivOffsetHeight);
			autoScroll = false;
		}
	});

	export let todoWrap: TodoType[] = [];
	export const readonly = 'only';
	let inputText = '';
	let inputFocused: HTMLInputElement;
	let listDiv: HTMLDivElement;
	let autoScroll: boolean;
	let listDivOffsetHeight: number;

	let prevTodos = todoWrap;

	$: {
		autoScroll = todoWrap.length > prevTodos.length;
		prevTodos = todoWrap;
	}

	export const clearInput = () => {
		inputText = '';
		inputFocused.focus();
	};

	// export const clearInput = (event : Event): Event => {
	// 	if(!inputText) return;
	// 	inputText = '';
	// 	inputFocused.focus() : event as FocusEvent;
	// };

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
	<div class="todo-list" bind:this={listDiv}>
		<div bind:offsetHeight={listDivOffsetHeight}>
			<ul>
				{#each todoWrap as { id = '', title = '', completed }, index (id)}
					{@const number = index + 1}
					<!-- {@debug id, title, completed, index} -->
					<li>
						<input
							type="checkbox"
							id="label-id{index}"
							bind:group={id}
							on:input={(event) => {
								event.currentTarget.checked = completed;

								let value = !completed;
								handleToggleTodo({ id, value });
								console.dir(event.currentTarget);
							}}
							checked={completed}
						/>
						<label for="label-id{index}">
							{completed}
							{number}
							{title}
						</label>
						<Button on:click={() => handleRemoveTodo({ id })}>remove</Button>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<p>{inputText}</p>
	<form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
		<input type="text" bind:this={inputFocused} bind:value={inputText} />
		<Button type="submit" disabled={!inputText}>add</Button>
	</form>
</div>

<style lang="scss">
	.todo-list {
		max-height: function.rem(150);
		overflow: auto;
	}
</style>
