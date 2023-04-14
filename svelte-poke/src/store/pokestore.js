import { writable } from 'svelte/store';

export const arrPokemon = writable([]);

const fetchNumber = 150;

let koreanNames = [];
const urls = [];

for (let index = 0; index < fetchNumber; index += 1) {
	let url = `https://pokeapi.co/api/v2/pokemon-species/${index + 1}`;
	urls.push(url);
}

let requests = urls.map(url => fetch(url));
Promise.all(requests)
	.then(responses => Promise.all(responses.map(res => res.json())))
	.then(results => {
		for (const result of results) {
			const resultName = result.names[2].name;

			//console.log(resultName);
			//koreanNames = [...resultName];
			koreanNames.push(result.names[2].name);
		}
		fetchPokemon();
	})
	.catch();

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=${fetchNumber}`;
	const res = await fetch(url);
	const data = await res.json();

	const loadPokemon = data.results.map((pokemon, index) => {
		return {
			name: koreanNames[index],
			// name: pokemon.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`,
		};
	});

	arrPokemon.set(loadPokemon);
};
