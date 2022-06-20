import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Select from 'react-select'
import pokemonCardsContext from '../lib/context/pokemonCardsContext.js'

const ColourSelect = ({ allPokemon, options }) => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const changeHandler = (colourID) => {
    const newSelection = allPokemon.filter(({ colour }) => colour == colourID)
    setPokemonCards(newSelection)
  }

return (
  <>
    <Select
          placeholder={`Search Pokemon by Colour`}
          maxMenuHeight={400}
          options={options}
          instanceId="colour-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </>
)
}

export default ColourSelect