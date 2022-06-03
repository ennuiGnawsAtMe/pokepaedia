import { useEffect } from 'react'
import Select from 'react-select'
import { getPokemonAsync } from '../lib/controllers'
import data from '../data/data.json'
import styles from '../styles/DropdownName.module.css'

const DropdownName = ({ setSelection}) => {

  // const getNames = () => {
  //   const options = names.map(poke => {
  //     return {
  //     value: poke.name,
  //     label: poke.name,
  //   }
  //   })
  //   return options
  // }

// const nameOptions = getNames()

const getMultiPokeArray = (arr) => {
  const multiPokeArray = arr.map(e => e.value)
  return multiPokeArray
}

const changeHandler = async (selection) => {
    const namesArr = getMultiPokeArray(selection)
    const pokemons = await getPokemonAsync(namesArr)
    setSelection(pokemons)
}


    
return (
  <div className={styles.container}>
    {/* <Select
          isMulti
          placeholder={`Search Pokemon by Name`}
          options={nameOptions}
          instanceId="name-value-select"
          onChange={e => changeHandler(e)}
          /> */}
  </div>
)
}

export default DropdownName