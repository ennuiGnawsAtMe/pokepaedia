import axios from 'axios'
import { cleanNamesForSpecies } from './controllers'

// EXTERNAL APIs
export const getPokemonApi = async (name) => {
    try {
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${name === 'shaymin' ? 'shaymin-sky' : name}`)
        return res.data
    } catch (e) {
        console.error(e)
    }
}

export const getSpeciesApi = async (name) => {
    try {
        const sanitisedName = cleanNamesForSpecies(name)
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${sanitisedName}/`)
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

