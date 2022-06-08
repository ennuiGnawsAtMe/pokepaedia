import { useEffect, useState, useContext } from 'react'
import Select from 'react-select'
import styles from '../styles/DropdownType.module.css'
import { getTypeOptions } from '../lib/utils'
import { types } from '../lib/utils'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'


const DropdownType = () => {
    const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
    const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getTypeOptions(types))
}, []);

const changeHandler = (typeName) => {
  const newSelection = []
    allPokemon.forEach(poke => {
      poke.type.forEach(element => element.type == typeName && newSelection.push(poke))
    })
  setPokemonCards(newSelection)
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Type`}
          options={options}
          instanceId="type-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownType