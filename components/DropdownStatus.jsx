import { useContext } from 'react'
import Select from 'react-select'
import styles from '../styles/Dropdown.module.css'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'


const DropdownStatus = () => {
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  const options = [
    {
      value: "baby",
      label: "Baby"
    },
    {
      value: "mythical",
      label: "Mythical"
    },
    {
      value: "legendary",
      label: "Legendary"
    }]

const changeHandler = (status) => {
  if (status === 'baby') {
    const newSelection = allPokemon.filter(({ isBaby }) => isBaby == true)
    setPokemonCards(newSelection)
  } else if (status === 'mythical') {
    const newSelection = allPokemon.filter(({ isMythical }) => isMythical == true)
    setPokemonCards(newSelection)
  } else if (status === 'legendary') {
    const newSelection = allPokemon.filter(({ isLegendary }) => isLegendary == true)
    setPokemonCards(newSelection)
  }
}

return (
  <div className={styles.container}>
    <Select
          placeholder={`Search Pokemon by Status`}
          maxMenuHeight={400}
          options={options}
          instanceId="status-value-select"
          onChange={event => changeHandler(event.value)}
        />
  </div>
)
}

export default DropdownStatus