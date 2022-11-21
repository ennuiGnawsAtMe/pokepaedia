export const getRandomId = () => {
  const min = Math.ceil(1)
  const max = Math.floor(898)
  const randomId = Math.floor(Math.random() * (max - min) + min)
  return randomId
}

export const getBlurb = allBlurbs => {
  const blurb = allBlurbs.find(blurb => blurb.language.name === 'en')
  return blurb.flavor_text
}

export const capitalise = str => {
  const capitalised = str.charAt(0).toUpperCase() + str.slice(1)
  return capitalised
}

export const getTypeOptions = typeOptions => {
  const options = typeOptions.map(option => ({
    value: option,
    label: capitalise(option),
  }))
  return options
}

export const getHabitatOptions = pokemon => {
  const values = pokemon.map(poke => poke.habitat)
  const uniqueValues = Array.from(new Set(values))
  const options = uniqueValues.map(value => ({
    value: value,
    label: capitalise(value),
  }))
  return options
}

export const getShapeOptions = pokemon => {
  const values = pokemon.map(poke => poke.shape)
  const uniqueValues = Array.from(new Set(values))
  const options = uniqueValues.map(value => ({
    value: value,
    label: capitalise(value),
  }))
  return options
}

export const getColourOptions = pokemon => {
  const values = pokemon.map(poke => poke.colour)
  const uniqueValues = Array.from(new Set(values))
  const options = uniqueValues.map(value => ({
    value: value,
    label: capitalise(value),
  }))
  return options
}

export const getAbilityOptions = allPokemon => {
  const arr = allPokemon
    .map(poke => poke.ability.map(oneAbility => oneAbility.ability))
    .flat()
  const uniqueValues = Array.from(new Set(arr))
  const options = uniqueValues.map(value => ({
    value: value,
    label: capitalise(value),
  }))
  return options
}

export const getNameOptions = allPokemon => {
  const options = allPokemon.map(poke => ({
    value: poke.pokedex,
    label: poke.name,
  }))
  return options
}

export const getRandomPoke = pokemonArr => {
  const randomInt = getRandomId()
  const randomPokemon = pokemonArr.find(poke => poke.pokedex === randomInt)
  return randomPokemon
}

export const goToTop = () => {
  window.scrollTo({
    top: 0,
  })
}

export const getOrdinalNumbers = number => {
  const ordinalRules = new Intl.PluralRules('en', {
    type: 'ordinal',
  })
  const suffixes = {
    one: 'st',
    two: 'nd',
    few: 'rd',
    other: 'th',
  }
  const suffix = suffixes[ordinalRules.select(number)]
  return number + suffix
}

export const sortByRating = (selectionArr, ratingsArr) => {
  const sortedByRating = selectionArr.map(poke => {
    const matchingPoke = ratingsArr.find(
      pokemon => pokemon.pokedex == poke.pokedex
    )
    return { ...poke, ratingOverall: matchingPoke.ratingOverall }
  })
  const sorted = sortedByRating.sort(
    (a, b) => b.ratingOverall - a.ratingOverall
  )
  return sorted
}

export const getRandomImage = object => {
  const keys = Object.keys(object)
  return keys[Math.floor(Math.random() * keys.length)]
}
