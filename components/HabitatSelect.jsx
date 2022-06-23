import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import { goToTop } from '../lib/funcs.js'


const HabitatSelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const changeHandler = (habitatID) => {
    goToTop()
    const newSelection = allPokemon.filter(({ habitat }) => habitat == habitatID)
    setPokemonCards(newSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Habitat`}
          maxMenuHeight={400}
          options={options}
          instanceId="habitat-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </>
)
}

export default HabitatSelect