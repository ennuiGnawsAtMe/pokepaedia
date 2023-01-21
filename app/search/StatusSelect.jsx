'use client'

import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../data/swr.js'
import { statusOptions } from '../../data/constants.js'
import data from '../../data/all.json'

const StatusSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()
  const { pokemon } = data

  const changeHandler = status => {
    goToTop()

    let newSelection = []

    if (status === 'baby') {
      newSelection = pokemon.filter(({ isBaby }) => isBaby == true)
    } else if (status === 'mythical') {
      newSelection = pokemon.filter(({ isMythical }) => isMythical == true)
    } else if (status === 'legendary') {
      newSelection = pokemon.filter(({ isLegendary }) => isLegendary == true)
    }
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Status...`}
        maxMenuHeight={400}
        options={statusOptions}
        instanceId="status-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default StatusSelect
