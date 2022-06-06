import { useEffect, useState } from 'react'
import Select from 'react-select'
import { getColourOptions } from '../lib/utils'
import styles from '../styles/DropdownHabitat.module.css'

const DropdownColour = ({ allPokemon, setSelection }) => {
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getColourOptions(allPokemon))
}, []);

const changeHandler = (colourID) => {
  const newSelection = allPokemon.filter(({ colour }) => colour == colourID)
  setSelection(newSelection)
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Colour`}
          options={options}
          instanceId="colour-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownColour