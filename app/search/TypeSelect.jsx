'use client'

import { useContext } from 'react'
import Select from 'react-select'
import cardFacesContext from '../../context/cardFacesContext.js'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers'
import { useGetAllPokemonDb } from '../../data/swr.js'
import { typeOptions } from '../../data/constants.js'
import data from '../../data/all.json'

const TypeSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = typeName => {
    goToTop()
    setCardFaces('image')
    const newSelection = []
    data.pokemon.forEach(poke => {
      poke.type.forEach(
        types => types.type == typeName && newSelection.push(poke)
      )
    })
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Type...`}
        maxMenuHeight={400}
        options={typeOptions}
        instanceId="type-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default TypeSelect
