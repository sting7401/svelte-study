<script lang="ts">
	import type { TodoType } from '$lib/types/Todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let todoWrap: TodoType[] = [];
</script>

<TodoList bind:todoWrap on:addTodo={() => {}} />

<style>
</style>
