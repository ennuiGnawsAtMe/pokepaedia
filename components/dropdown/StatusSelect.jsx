'use client';

import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../lib/funcs.js'
import { useGetAllPokemonDb } from '../../lib/swr.js'

const StatusSelect = ({allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = (status) => {
    goToTop()

    let newSelection = []

    if (status === 'baby') {
      newSelection = allPokemon.filter(({ isBaby }) => isBaby == true)
    } else if (status === 'mythical') {
      newSelection = allPokemon.filter(({ isMythical }) => isMythical == true)
    } else if (status === 'legendary') {
      newSelection = allPokemon.filter(({ isLegendary }) => isLegendary == true)
    }
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Status`}
          maxMenuHeight={400}
          options={options}
          instanceId="status-value-select"
          onChange={event => changeHandler(event.value)}
          blurInputOnClear={true}
          focusInputOnMenuOpen={false}
    />
  </>
)
}

export default StatusSelect