<script>
	import { fade } from 'svelte/transition';

	import { arrPokemon } from './../../store/pokestore.js';
	export let id = 0;
	export let types = [''];
	export let height = '';
	export let weight = '';
	export let name = '';
	export let sprites = [''];
</script>

<div class="flex flex-col items-center p-4 text-2xl" transition:fade>
	<p>{$arrPokemon[id - 1].name}</p>
	<p>
		타입:
		{#each types as item}
			<span>
				{item.type.name}
			</span>
		{/each}
	</p>
	<p>키: {height}</p>
	<p>무게: {weight}</p>
	<p>
		<img src={sprites['front_default']} alt={name} class="w-40 h-40" />
	</p>
</div>
