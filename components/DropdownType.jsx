import { useEffect, useState } from 'react'
import Select from 'react-select'
import styles from '../styles/DropdownType.module.css'
import { getTypeOptions } from '../lib/utils'
import { types } from '../lib/utils'

const DropdownType = ({ allPokemon, setSelection }) => {
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getTypeOptions(types))
}, []);

const changeHandler = (typeName) => {
  const newSelection = []
    allPokemon.forEach(poke => {
      poke.type.forEach(element => element.type == typeName && newSelection.push(poke))
    })
  setSelection(newSelection)
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