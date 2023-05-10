<script lang="ts">
	import { fade } from 'svelte/transition';
	// import { PokeTypeList } from '$lib/types/pokeTypeList.ts';

	export type PokeTypeList = {
		id: number;
		image: string;
		name: string;
	};

	export let pokemon: PokeTypeList;
	export let { id, image, name } = pokemon;
</script>

<a
	href={`/pokemon/${id}`}
	class="flex flex-col justify-center items-center p-5 bg-gray-100 text-gray-800 text-center hover:shadow-md"
	transition:fade
>
	<p class="flex justify-center items-center w-40 h-40">
		<img src={image} alt={name} />
	</p>
	<p class="text-2xl">{id}. {name}</p>
</a>

<style>
</style>
