import { getPokemonApi, getSpeciesApi } from './api'

// funcs for getting random pokemon on homepage
const getRandomId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(809);
    const randomId = Math.floor(Math.random() * (max - min) + min)
    return ({
        id: randomId
    })
  } 

  export const getBlurb = (allBlurbs) => {
    const blurb = allBlurbs.find(blurb => blurb.language.name === 'en')
    return blurb.flavor_text
}

const getPokeImage = async (pokemon) => {
    if (pokemon === 'nidoran♀') {
        return `https://img.pokemondb.net/artwork/large/nidoran-f.jpg`
    } else if (pokemon === 'nidoran♂') {
        return `https://img.pokemondb.net/artwork/large/nidoran-m.jpg`
    } else if (pokemon === 'oricorio') {
        return `https://img.pokemondb.net/artwork/large/oricorio-baile.jpg`
    } else {
        return `https://img.pokemondb.net/artwork/large/${pokemon}.jpg`
    }
 }

  export const getRandomPokemon = async () => {
    const { id } = getRandomId()
    try {
      const { flavor_text_entries, name} = await getSpeciesApi(id)
      const blurbEng = getBlurb(flavor_text_entries)
      const image = await getPokeImage(name)
      return { name, blurbEng, image }
    } catch (err) {
      console.error(err)
    }
  }

export const capitalise = (str) => {
  const capitalised = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalised
}


export const minifyPokemon = (pokeType, pokeSpecies) => {
    try {
        return {
        // From Type api
        id: pokeType.id,
        name: pokeType.name.charAt(0).toUpperCase() + pokeType.name.slice(1),
        height: pokeType.height,
        weight: pokeType.weight,
        experience: pokeType.base_experience,
        type: pokeType.types.map(type => type.type.name),
        hp: pokeType.stats[0].base_stat,
        attack: pokeType.stats[1].base_stat,
        defense: pokeType.stats[2].base_stat,
        specialAttack: pokeType.stats[3].base_stat,
        specialDefense: pokeType.stats[4].base_stat,
        speed: pokeType.stats[5].base_stat,
        specialAbilities: pokeType.abilities.map(elem => (
            {
              ability: elem.ability.name,
              url: elem.ability.url
            }
        )),
        // From evolution api
        evolutionURL: pokeSpecies.evolution_chain?.url,
        evolvesFrom: pokeSpecies.evolves_from_species,
        happiness: pokeSpecies.base_happiness,
        colour: pokeSpecies.color?.name,
        habitat: pokeSpecies.habitat === null ? 'Unknown' : pokeSpecies.habitat.name,
        shape: pokeSpecies.shape?.name === undefined ? 'Unspecified' : pokeSpecies.shape.name,
        blurb: getBlurb(pokeSpecies.flavor_text_entries)
    }
    } catch (err) {
        console.error('Minify Not Working!')
    }
}

 
// LOOP through selection array and make API calls to get data for each pokemon selected
export const getPokemonAsync = async (selectionArr) => {
  const pokemons = []

  for (let i = 0; i < selectionArr.length; i++) {
          const pokemonAttributes = await getPokemonApi(selectionArr[i].toLowerCase())
          const pokeEvolution = await getSpeciesApi(selectionArr[i].toLowerCase())
          const pokeFromApi = minifyPokemon(pokemonAttributes, pokeEvolution)
          const image = getPokeImage(pokemonAttributes.name)
          const pokemon = {...pokeFromApi, image}
          pokemons.push(pokemon)
        }
        return pokemons
}

export const getOnePokemonAsync = async (PokeName) => {
          const pokemonAttributes = await getPokemonApi(PokeName.toLowerCase())
          const pokeEvolution = await getSpeciesApi(PokeName.toLowerCase())
          const pokeFromApi = minifyPokemon(pokemonAttributes, pokeEvolution)
          const image = getPokeImage(pokemonAttributes.name)
          const pokemon = {...pokeFromApi, image}
          return pokemon

}