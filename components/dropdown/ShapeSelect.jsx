'use client'

import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../utils/swr.js'

const ShapeSelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = shapeName => {
    goToTop()
    const newSelection = allPokemon.filter(({ shape }) => shape == shapeName)
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokemon by Shape`}
        maxMenuHeight={400}
        options={options}
        instanceId="shape-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default ShapeSelect
