'use client'

import { useContext } from 'react'
import Select from 'react-select'
import cardFacesContext from '../../context/cardFacesContext.js'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../utils/helpers.js'
import { useGetAllPokemonDb } from '../../data/swr.js'
import data from '../../data/all.json'
import { habitatOptions } from '../../data/constants.js'

const HabitatSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const { allPokemonDb } = useGetAllPokemonDb()
  const { pokemon } = data

  const changeHandler = habitatID => {
    goToTop()
    setCardFaces('image')
    const newSelection = pokemon.filter(({ habitat }) => habitat == habitatID)
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

  return (
    <>
      <Select
        placeholder={`Search Pokémon by Habitat...`}
        maxMenuHeight={400}
        options={habitatOptions}
        instanceId="habitat-value-select"
        onChange={event => changeHandler(event.value)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default HabitatSelect
