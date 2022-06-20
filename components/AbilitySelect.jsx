import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../lib/context/pokemonCardsContext'

const AbilitySelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const changeHandler = (abilityName) => {
    const newSelection = []
      allPokemon.forEach(poke => {
        poke.ability.forEach(element => element.ability == abilityName && newSelection.push(poke))
      })
    setPokemonCards(newSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Ability`}
          maxMenuHeight={400}
          options={options}
          instanceId="ability-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </>
)
}

export default AbilitySelect