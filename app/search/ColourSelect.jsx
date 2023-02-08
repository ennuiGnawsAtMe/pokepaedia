'use client'

import { useContext } from 'react'
import Select from 'react-select'
import cardFacesContext from '../../context/cardFacesContext.js'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../data/swr.js'
import { colourOptions } from '../../data/constants.js'
import data from '../../data/all.json'

const ColourSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const { allPokemonDb } = useGetAllPokemonDb()
  const { pokemon } = data

  const changeHandler = colourID => {
    goToTop()
    setCardFaces('image')
    const newSelection = pokemon.filter(({ colour }) => colour == colourID)
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Colour...`}
        maxMenuHeight={400}
        options={colourOptions}
        instanceId="colour-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default ColourSelect
