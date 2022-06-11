import { useEffect, useState, useContext } from 'react'
import Select from 'react-select'
import { getHabitatOptions } from '../lib/utils'
import styles from '../styles/DropdownHabitat.module.css'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'


const DropdownHabitat = () => {
    const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
    const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getHabitatOptions(allPokemon))
}, []);

const changeHandler = (habitatID) => {
  const newSelection = allPokemon.filter(({ habitat }) => habitat == habitatID)
  setPokemonCards(newSelection)
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Habitat`}
          maxMenuHeight={400}
          options={options}
          instanceId="habitat-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownHabitat