'use client';

import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop, sortByRating } from '../../lib/funcs.js'
import { useGetAllPokemonDb } from '../../lib/swr.js'

const AbilitySelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const { allPokemonDb } = useGetAllPokemonDb()

  const changeHandler = (abilityName) => {
    goToTop()
    const newSelection = []
      allPokemon.forEach(poke => {
        poke.ability.forEach(element => element.ability == abilityName && newSelection.push(poke))
      })
    const sortedSelection = sortByRating(newSelection, allPokemonDb)
    setPokemonCards(sortedSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Ability`}
          maxMenuHeight={400}
          options={options}
          instanceId="ability-value-select"
          onChange={event => changeHandler(event.value)}
          blurInputOnClear={true}
          focusInputOnMenuOpen={false}
        />
  </>
)
}

export default AbilitySelect