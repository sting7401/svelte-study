<script>
	import { arrPokemon } from './../store/pokestore.js';
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	let searchTerm = '';
	let filterPoke = [];

	// 반응성

	$: {
		if (searchTerm) {
			filterPoke = $arrPokemon.filter(poke =>
				poke.name.includes(searchTerm),
			);
		} else {
			filterPoke = [...$arrPokemon];
		}
	}
</script>

<svelte:head>
	<title>포켓몬 위키</title>
</svelte:head>

<h1 class="text-2xl text-center my-4 font-bold underline">
	포켓몬 위키 사이트
</h1>

<div>
	<input
		type="text"
		class="w-full rounded-md text-lg p-4 mb-8 border-2 border-gray-200"
		placeholder="검색"
		bind:value={searchTerm}
	/>
</div>

<ul class="grid gap-4 md:grid-cols-3 grid-cols-2">
	{#each filterPoke as { ...pokemon }}
		<li>
			<PokemonCard {pokemon} />
		</li>
	{/each}
</ul>
