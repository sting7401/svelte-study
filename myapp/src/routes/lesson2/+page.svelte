<script lang="ts">
	import { PageData } from './$types';
	import { generations } from './generations';

	let greetingObj = {
		greeting: 'hello',
		name: 'world'
	};
	const data = ['yellow', 'blue', 'red'];

	export let monsters: PageData;
</script>

<!-- markup (zero or more items) goes here -->

{#each monsters as monster (monster.url)}
	<h1>{monster.id} : {monster.name}</h1>
{/each}

{#each generations as generation, i}
	<h1>{generation.name}</h1>
	<p>{generation.games.join(', ')}</p>
	<p>{generation.main_region}</p>
{/each}

<style>
	/* your styles go here */
</style>
