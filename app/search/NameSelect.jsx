'use client'

import Select from 'react-select'
import { useContext } from 'react'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, getNameOptions } from '../../utils/helpers.js'
import data from '../../data/all.json'
import { useGetAllPokemonDb } from '../../data/swr.js'

const NameSelect = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const nameOptions = getNameOptions(data.pokemon)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = selection => {
    goToTop()
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
