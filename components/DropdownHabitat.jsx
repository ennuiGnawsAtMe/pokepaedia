import { useEffect, useState } from 'react'
import Select from 'react-select'
import { getHabitatOptions } from '../lib/utils'
import styles from '../styles/DropdownHabitat.module.css'

const DropdownHabitat = ({ allPokemon, setSelection }) => {
  const [options, setOptions] = useState({})

useEffect(() => {
  setOptions(getHabitatOptions(allPokemon))
}, []);

const changeHandler = (habitatID) => {
  const newSelection = allPokemon.filter(({ habitat }) => habitat == habitatID)
  setSelection(newSelection)
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Habitat`}
          options={options}
          instanceId="habitat-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownHabitat