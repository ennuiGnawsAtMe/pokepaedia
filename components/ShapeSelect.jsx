import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import { goToTop } from '../lib/funcs.js'

const ShapeSelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
    
  const changeHandler = (shapeName) => {
    goToTop()
    const newSelection = allPokemon.filter(({ shape }) => shape == shapeName)
    setPokemonCards(newSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Shape`}
          maxMenuHeight={400}
          options={options}
          instanceId="shape-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </>
)
}

export default ShapeSelect