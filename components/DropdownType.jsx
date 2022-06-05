import { useEffect, useState } from 'react'
import Select from 'react-select'
import styles from '../styles/DropdownType.module.css'
import { getTypeOptions } from '../lib/utils'
import { TYPEID } from '../prisma/utils'

const DropdownType = ({ allPokemon, setSelection }) => {
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getTypeOptions(TYPEID))
}, []);

const changeHandler = (typeID) => {
  const newSelection = []
    allPokemon.forEach(poke => {
      poke.type.forEach(element => element.id == typeID && newSelection.push(poke))
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