'use client'

import Select from 'react-select'
import { useContext } from 'react'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop } from '../../utils/helpers.js'
import { getNameOptions } from '../../utils/helpers.js'
import data from '../../data/all.json'

const NameSelect = ({ allPokemon }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const nameOptions = getNameOptions(data.pokemon)

  const changeHandler = selection => {
    goToTop()
    const pokedexList = selection.map(element => element.value)
    const newSelection = []
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
