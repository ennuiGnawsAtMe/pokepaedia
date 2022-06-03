import axios from 'axios'

// EXTERNAL APIs
export const getPokemonApi = async (pokedex) => {
    try {
        // const sanitisedNames = cleanNamesForApi(name)
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokedex}`)
        return res.data
    } catch (e) {
        console.error(e)
    }
}

export const getSpeciesApi = async (pokedex) => {
    try {
        // const sanitisedName = cleanNamesForSpecies(name)
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokedex}/`)
        return res.data
    } catch (e) {
        console.error(e)
    }
}

export const getPokemonByType = async (type) => {
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`)
        const pokemonByType = res.data.pokemon.map(poke => poke.pokemon.name)
        return pokemonByType
    } catch(e) {
        console.error(e)
    }
}

