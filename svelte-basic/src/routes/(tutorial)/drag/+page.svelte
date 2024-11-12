<script lang="ts">
	import { run } from 'svelte/legacy';

	import Task, { type TaskItem } from './Task.svelte';

	let taskTodo: TaskItem[] = [
		{
			id: 1,
			title: 'string',
			description: 'string',
			points: 'number',
			user: null
		},

		{
			id: 2,
			title: 'string',
			description: 'string',
			points: 'number',
			user: null
		},

		{
			id: 3,
			title: 'string',
			description: 'string',
			points: 'number',
			user: null
		}
	];
	let drag = false;
	let taskTodoEnd: TaskItem[] = $state([]);
	let taskDragging: TaskItem;
	let dragCheck;
	run(() => {
		dragCheck = drag;
	});

	const dragEnter = (e: DragEvent) => {
		dragCheck = true;
	};

	const dragLeave = (e: DragEvent) => {
		dragCheck = false;
	};

	const todoDragging = (e: DragEvent) => {
		const id = (e.target as HTMLDivElement).getAttribute('id');
		const task = taskTodo.find((task) => task.id === id);

		console.log(task);
		if (task) {
			taskDragging = task;
		}
	};

	const todoDrop = (e: DragEvent) => {
		taskTodoEnd = [...taskTodoEnd, taskDragging];
	};

	const dragOver = (e: DragEvent) => {};
</script>

<div class="parent" data-drag={dragCheck}>
	<div class="drag">
		{#each taskTodo as todo (todo.id)}
			<Task {todo} on:drag={todoDragging} />
		{/each}
	</div>

	<div
		class="drag"
		ondrop={todoDrop}
		ondragenter={dragEnter}
		ondragleave={dragLeave}
		ondragover={dragOver}
		style={dragCheck ? 'border: 2px solid blue' : ''}
	>
		{#each taskTodoEnd as todo (todo.id)}
			<Task {todo} />
		{/each}
	</div>
</div>

<style>
	.parent {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.drag {
		border-radius: 1rem;
		border: 2px solid #ee0000;
	}
</style>
