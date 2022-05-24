import axios from 'axios'

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
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${name === 'oricorio-baile' ? 'oricorio' : name}/`)
        return res.data
    } catch (e) {
        console.error(e)
    }
}
