import Select from 'react-select'
import styles from '../styles/DropdownName.module.css'
import { useState } from 'react'


const DropdownName = ({ allPokemon, setSelection}) => {

    const options = allPokemon.map(poke => {
      return {
      value: poke.pokedex,
      label: poke.name,
    }
  })

const changeHandler = (selection) => {
    const pokedexList = selection.map(element => element.value)
    const newSelection = []
    for (let i = 0; i < pokedexList.length; i++) {
      newSelection.push(allPokemon.find(({ pokedex }) => pokedex === pokedexList[i]))
    }
    setSelection(newSelection.slice(0).reverse())
}

return (
  <div className={styles.container}>
    <Select
          isMulti
          placeholder={`Search Pokemon by Name`}
          options={options}
          instanceId="name-value-select"
          onChange={event => changeHandler(event)}
          />
  </div>
)
}

export default DropdownName