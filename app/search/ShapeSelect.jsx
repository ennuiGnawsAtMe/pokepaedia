'use client'

import { useContext } from 'react'
import Select from 'react-select'
import cardFacesContext from '../../context/cardFacesContext.js'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../data/swr.js'
import data from '../../data/all.json'
import { shapeOptions } from '../../data/constants.js'

const ShapeSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const { allPokemonDb } = useGetAllPokemonDb()
  const { pokemon } = data

  const changeHandler = shapeName => {
    goToTop()
    setCardFaces('image')
    const newSelection = pokemon.filter(({ shape }) => shape == shapeName)
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Shape...`}
        maxMenuHeight={400}
        options={shapeOptions}
        instanceId="shape-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default ShapeSelect
