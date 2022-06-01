import { getPokemonApi, getSpeciesApi } from './api'

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

const getPokeImage = (pokemon) => {
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
      const image = getPokeImage(name)
      return { name: capitalise(name), blurb: blurbEng, image }
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
        console.error(err, 'Minify Not Working!')
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
        console.log(pokemons)
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

export const cleanNamesForSpecies = (name) => {
    switch (name) {
          case "meloetta-aria":
          return "meloetta"

          case 'oricorio-baile':
          return 'oricorio'

          case "indeedee-male":
          return "indeedee"

          case "meloetta-pirouette":
          return "meloetta"

          case "kangaskhan-mega": 
          return "kangaskhan"

          case "audino-mega":
          return "audino"

          case "pidgeot-mega":
          return"pidgeot"

          case "lopunny-mega":
          return "lopunny"

          case "rattata-alola":
          return "rattata"

          case "raticate-alola":
          return "raticate"

          case "raticate-totem-alola":
          return "raticate"

          case "gumshoos-totem":
          return "gumshoos"

          case "eevee-starter":
          return "eevee"

          case "zigzagoon-galar":
          return "zigzagoon"

          case "linoone-galar":
          return "linoone"
           
          case "indeedee-female":
          return "indeedee"

          case "meowth-gmax":
          return "meowth"

          case "eevee-gmax":
          return "eevee"

          case "snorlax-gmax":
          return "snorlax"

          default:
              return name
        }    
}

const errorNames = [
    "raticate-totem-alola",
    'raticate-alola',
    "rattata-alola",
    "eevee-starter",
    "gumshoos-totem",
    "zigzagoon-galar",
    "linoone-galar",
    "meowth-gmax",
    "snorlax-gmax",
    "eevee-gmax"
  ]

export const filterNoImage = (nameArr) => {
    console.log(nameArr)
    nameArr = nameArr.filter (pokeName => !errorNames.includes(pokeName))
    console.log(nameArr)
    return nameArr
  }

  