import { getPokemonApi, getSpeciesApi } from './api'

export const getRandomId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(809);
    const randomId = Math.floor(Math.random() * (max - min) + min)
    return randomId
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

  // export const getRandomPokemon = async () => {
  //   const { id } = getRandomId()
  //   try {
  //     const { flavor_text_entries, name} = await getSpeciesApi(id)
  //     const blurbEng = getBlurb(flavor_text_entries)
  //     const image = getPokeImage(name)
  //     return { name: capitalise(name), blurb: blurbEng, image }
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

export const capitalise = (str) => {
  const capitalised = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalised
}

// export const minifyPokemon = (pokeType, pokeSpecies) => {
//     try {
//         return {
//         // From Type api
//         pokedex: pokeType.id,
//         name: pokeType.name.charAt(0).toUpperCase() + pokeType.name.slice(1),
//         height: pokeType.height,
//         weight: pokeType.weight,
//         experience: pokeType.base_experience,
//         type: pokeType.types.map(elem => (
//           { 
//             type: elem.type.name, 
//             url: elem.type.url 
//           }
//           )),
//         hp: pokeType.stats[0].base_stat,
//         attack: pokeType.stats[1].base_stat,
//         defense: pokeType.stats[2].base_stat,
//         specialAttack: pokeType.stats[3].base_stat,
//         specialDefense: pokeType.stats[4].base_stat,
//         speed: pokeType.stats[5].base_stat,
//         ability: pokeType.abilities.map(elem => (
//             {
//               ability: elem.ability.name,
//               url: elem.ability.url
//             }
//         )),
//         // From evolution api
//         evolutionURL: pokeSpecies.evolution_chain?.url,
//         evolvesFrom: pokeSpecies.evolves_from_species?.name,
//         happiness: pokeSpecies.base_happiness,
//         colour: pokeSpecies.color?.name,
//         habitat: pokeSpecies.habitat === null ? 'Unknown' : pokeSpecies.habitat.name,
//         shape: pokeSpecies.shape?.name === undefined ? 'Unspecified' : pokeSpecies.shape.name,
//         blurb: getBlurb(pokeSpecies.flavor_text_entries)
//     }
//     } catch (err) {
//         console.error(err, 'Minify Not Working!')
//     }
// }

 
// LOOP through selection array and make API calls to get data for each pokemon selected
// export const getPokemonAsync = async (pokedexArr) => {
//   const pokemons = []

//   for (let i = 0; i < pokedexArr.length; i++) {
//           const pokemonAttributes = await getPokemonApi(pokedexArr[i])
//           const pokeEvolution = await getSpeciesApi(pokedexArr[i])
//           const pokeFromApi = minifyPokemon(pokemonAttributes, pokeEvolution)
//           const image = getPokeImage(pokemonAttributes.name)
//           const pokemon = {...pokeFromApi, image}
//           pokemons.push(pokemon)
//         }
//         return pokemons
// }

// export const getOnePokemonAsync = async (PokeName) => {
//           const pokemonAttributes = await getPokemonApi(PokeName.toLowerCase())
//           const pokeEvolution = await getSpeciesApi(PokeName.toLowerCase())
//           const pokeFromApi = minifyPokemon(pokemonAttributes, pokeEvolution)
//           const image = getPokeImage(pokemonAttributes.name)
//           const pokemon = {...pokeFromApi, image}
//           return pokemon
// }

// export const cleanNamesForApi = (name) => {
//     switch (name) {
//           case "deoxys":
//           return "deoxys-normal"

//           case 'shaymin':
//           return 'shaymin-sky'

//           case "wormadam":
//           return "wormadam-plant"

//           case "giratina":
//           return "giratina-origin"

//           case "basculin":
//           return "basculin-red-striped"

//           case "darmanitan":
//           return "darmanitan-zen"

//           case "tornadus":
//           return "tornadus-incarnate"

//           default:
//           return  name
//     }
//   }

// export const cleanNamesForSpecies = (name) => {
//     switch (name) {
//           case "meloetta-aria":
//           return "meloetta"

//           case 'oricorio-baile':
//           return 'oricorio'

//           case "indeedee-male":
//           return "indeedee"

//           case "meloetta-pirouette":
//           return "meloetta"

//           case "kangaskhan-mega": 
//           return "kangaskhan"

//           case "audino-mega":
//           return "audino"

//           case "pidgeot-mega":
//           return"pidgeot"

//           case "lopunny-mega":
//           return "lopunny"

//           case "rattata-alola":
//           return "rattata"

//           case "raticate-alola":
//           return "raticate"

//           case "raticate-totem-alola":
//           return "raticate"

//           case "gumshoos-totem":
//           return "gumshoos"

//           case "eevee-starter":
//           return "eevee"

//           case "zigzagoon-galar":
//           return "zigzagoon"

//           case "linoone-galar":
//           return "linoone"
           
//           case "indeedee-female":
//           return "indeedee"

//           case "meowth-gmax":
//           return "meowth"

//           case "eevee-gmax":
//           return "eevee"

//           case "snorlax-gmax":
//           return "snorlax"

//           default:
//               return name
//         }    
// }

// const errorNames = [
//     "raticate-totem-alola",
//     'raticate-alola',
//     "rattata-alola",
//     "eevee-starter",
//     "gumshoos-totem",
//     "zigzagoon-galar",
//     "linoone-galar",
//     "meowth-gmax",
//     "snorlax-gmax",
//     "eevee-gmax"
//   ]

// export const filterNoImage = (nameArr) => {
//     nameArr = nameArr.filter (pokeName => !errorNames.includes(pokeName))
//     return nameArr
//   }

export const types = [
  "grass",
  "poison",
  "fire",
  "flying",	
  "water",
  "bug",
  "normal",
  "electric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "steel",
  "ice",
  "ghost",
  "dragon",
  "dark"
]

export const getTypeOptions = (typeOptions) => {
  const options = typeOptions.map(option => ({
    value: option,
    label: capitalise(option)
  }))
  return options
}

  export const getHabitatOptions = (pokemon) => {
      const values = pokemon.map(poke => poke.habitat)
      const uniqueValues = Array.from(new Set(values));
      const options = uniqueValues.map(value => ({
        value: value,
        label: capitalise(value)
      }))
      return options
  }

  export const getColourOptions = (pokemon) => {
  const values = pokemon.map(poke => poke.colour)
  const uniqueValues = Array.from(new Set(values));
  const options = uniqueValues.map(value => ({
    value: value,
    label: capitalise(value)
  }))
  return options
  }

  export const getRandomPoke = (pokemonArr) => {
    const randomInt = getRandomId()
    const randomPokemon = pokemonArr.find(poke => poke.pokedex === randomInt)
    return randomPokemon
  }