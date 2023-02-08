'use client'

import Select from 'react-select'
import { useContext } from 'react'
import cardFacesContext from '../../context/cardFacesContext.js'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop } from '../../utils/helpers.js'
import data from '../../data/all.json'
import { useGetAllPokemonDb } from '../../data/swr.js'
import { nameOptions } from '../../data/constants'

const NameSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = selection => {
    goToTop()
    setCardFaces('image')
    const pokedexList = selection.map(element => element.value)
    let newSelection = []
    pokedexList.forEach(pokeDex => {
      newSelection.push(data.pokemon.find(({ pokedex }) => pokedex === pokeDex))
    })
    setPokemonCards(newSelection.slice(0).reverse())
  }

  return (
    <>
      <Select
        isMulti
        maxMenuHeight={400}
        placeholder={`Search Pokémon by Name...`}
        options={nameOptions}
        instanceId="name-value-select"
        onChange={event => changeHandler(event)}
        blurInputOnClear={true}
        focusInputOnMenuOpen={false}
      />
    </>
  )
}

export default NameSelect
