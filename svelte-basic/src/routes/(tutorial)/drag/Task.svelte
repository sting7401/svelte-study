<script context="module" lang="ts">
	export interface TaskItem {
		id: string;
		title: string;
		description: string;
		points: number;
		user: null;
	}
</script>

<script lang="ts">
	export let todo: TaskItem;
</script>

<div id={todo.id} class="drag__item" draggable="true" on:drag>
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
