<script module lang="ts">
	export interface TaskItem {
		id: string;
		title: string;
		description: string;
		points: number;
		user: null;
	}
</script>

<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	interface Props {
		todo: TaskItem;
	}

	let { todo }: Props = $props();
</script>

<div id={todo.id} class="drag__item" draggable="true" ondrag={bubble('drag')}>
	<p>{todo.title}</p>
	<p>{todo.description}</p>
	<p>{todo.points}</p>
</div>

<style>
	.drag__item {
		border-radius: 1rem;
		border: 1px solid blue;
		margin: 1rem;
	}
</style>
