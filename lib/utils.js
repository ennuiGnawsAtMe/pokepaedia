import axios from 'axios'
import useSWR from 'swr'

//swr fetching ratings data regularly for all pokemon from database
export const fetcher = url => axios.get(url).then(res => res.data)

export const useAllPokemon = () => {
  const { data, error } = useSWR(`/api/pokemon`, fetcher)

  return {
    pokemonDb: data,
    isLoading: !error && !data,
    isError: error
  }
}

export const getRandomId = () => {
    const min = Math.ceil(1);
    const max = Math.floor(898);
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

export const capitalise = (str) => {
  const capitalised = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalised
}

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

  export const getShapeOptions = (pokemon) => {
    const values = pokemon.map(poke => poke.shape)
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

  export const getAbilityOptions = (allPokemon) => {
    const arr = allPokemon.map(poke => poke.ability.map(oneAbility => oneAbility.ability)).flat()
    const uniqueValues = Array.from(new Set(arr))
    const options = uniqueValues.map(value => ({
      value: value,
      label: capitalise(value)
    }))
    return options
  }

  export const getNameOptions = (allPokemon) => {
    const options = allPokemon.map(poke => ({
      value: poke.pokedex,
      label: poke.name,
    }))
    return options
  }

  export const getRandomPoke = (pokemonArr) => {
    const randomInt = getRandomId()
    const randomPokemon = pokemonArr.find(poke => poke.pokedex === randomInt)
    return randomPokemon
  }

  export const statusOptions = [
    {
      value: "baby",
      label: "Baby"
    },
    {
      value: "mythical",
      label: "Mythical"
    },
    {
      value: "legendary",
      label: "Legendary"
    }]

  export const goToTop = () => {
    window.scrollTo({
        top: 0,
    })
  }

  export const getOrdinalNumbers = (number) => {
    const sup = ["th", "st", "nd", "rd"]
    var number = number % 100
    return number + (sup[(number-20) % 10] || sup[number] || sup[0])
  }
  