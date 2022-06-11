import { useEffect, useState, useContext } from 'react'
import Select from 'react-select'
import { getShapeOptions } from '../lib/utils'
import styles from '../styles/DropdownHabitat.module.css'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'


const DropdownShape = () => {
    const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
    const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getShapeOptions(allPokemon))
}, []);

const changeHandler = (shapeName) => {
  const newSelection = allPokemon.filter(({ shape }) => shape == shapeName)
  setPokemonCards(newSelection)
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Shape`}
          maxMenuHeight={400}
          options={options}
          instanceId="shape-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownShape