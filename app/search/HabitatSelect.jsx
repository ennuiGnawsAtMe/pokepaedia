'use client'

import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../data/swr.js'

const HabitatSelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = habitatID => {
    goToTop()
    const newSelection = allPokemon.filter(
      ({ habitat }) => habitat == habitatID
    )
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Habitat...`}
        maxMenuHeight={400}
        options={options}
        instanceId="habitat-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default HabitatSelect
