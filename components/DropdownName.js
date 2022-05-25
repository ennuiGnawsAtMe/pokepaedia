import React, { useState, useContext } from 'react'
import Select from 'react-select'
import { getPokemonAsync } from '../lib/controllers'
import { pokemonContext } from '../pages/_app'

const DropdownName = ({ names }) => {
  const {pokemon, setPokemon} = useContext(pokemonContext)

  const getNames = () => {
    const options = names.map(poke => {
      return {
      value: poke.name,
      label: poke.name,
    }
    })
    return options
  }

const nameOptions = getNames()

const getMultiPokeArray = (arr) => {
  const multiPokeArray = arr.map(e => e.value)
  return multiPokeArray
}

const changeHandler = async (selection) => {
    const namesArr = getMultiPokeArray(selection)
    const pokemons = await getPokemonAsync(namesArr)
    setPokemon(pokemons)
}
    

return (
  <div>
    <Select
          isMulti
          placeholder={`Search Pokemon by Name`}
          options={nameOptions}
          instanceId="name-value-select"
          onChange={e => changeHandler(e)}
          />
          <h1>{pokemon.map(poke => <h1>{poke.name}</h1>)}</h1>
  </div>
)
}

export default DropdownName
