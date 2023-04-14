<script>
	import PokemonDetail from '$lib/components/PokemonDetail.svelte';

	export let data;

	const { pokemon } = data;
</script>

<h1 class="text-4xl text-center text-red-500">상세 페이지</h1>

<PokemonDetail {...pokemon} />
