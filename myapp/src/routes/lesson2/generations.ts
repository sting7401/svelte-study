export type Generation = {
    id: number,
    name: string,
    games: string[],
    main_region: string,
    pokemon_species?: string[]
}

export const generations: Generation[] = [
    { 
        id: 1, 
        name: 'GENE I',
        games: ['red', 'blue', 'yellow'],
        main_region: 'kanto'
    },
    { 
        id: 2, 
        name: 'GENE I',
        games: ['gikd', 'silver', 'crystal'],
        main_region: 'johto'
    }
]