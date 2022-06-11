import { useEffect, useState, useContext } from 'react'
import Select from 'react-select'
import { getColourOptions } from '../lib/utils'
import styles from '../styles/DropdownHabitat.module.css'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'


const DropdownColour = () => {
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getColourOptions(allPokemon))
}, []);

const changeHandler = (colourID) => {
  const newSelection = allPokemon.filter(({ colour }) => colour == colourID)
  setPokemonCards(newSelection)
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Colour`}
          maxMenuHeight={400}
          options={options}
          instanceId="colour-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownColour