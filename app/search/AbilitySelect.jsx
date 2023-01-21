'use client'

import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../data/swr.js'
import data from '../../data/all.json'
import { abilityOptions } from '../../data/constants.js'

const AbilitySelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()
  const { pokemon } = data

  const changeHandler = abilityName => {
    goToTop()
    const newSelection = []
    pokemon.forEach(poke => {
      poke.ability.forEach(
        element => element.ability == abilityName && newSelection.push(poke)
      )
    })
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Ability...`}
        maxMenuHeight={400}
        options={abilityOptions}
        instanceId="ability-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default AbilitySelect
