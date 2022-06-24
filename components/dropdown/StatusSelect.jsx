import { useContext } from 'react'
import Select from 'react-select'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import { goToTop } from '../../lib/funcs.js'

const StatusSelect = ({allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const changeHandler = (status) => {
    goToTop()
    if (status === 'baby') {
      const newSelection = allPokemon.filter(({ isBaby }) => isBaby == true)
      setPokemonCards(newSelection)
    } else if (status === 'mythical') {
      const newSelection = allPokemon.filter(({ isMythical }) => isMythical == true)
      setPokemonCards(newSelection)
    } else if (status === 'legendary') {
      const newSelection = allPokemon.filter(({ isLegendary }) => isLegendary == true)
      setPokemonCards(newSelection)
    }
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Status`}
          maxMenuHeight={400}
          options={options}
          instanceId="status-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </>
)
}

export default StatusSelect