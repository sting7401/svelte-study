import type { PageLoad } from "./$types"


type IndexMonster = {
  name: string
  url: string
}
export const load = (async ({ fetch }) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const monsters = await response.json();

  return  monsters
}) satisfies PageLoad