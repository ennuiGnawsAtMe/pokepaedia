import Select from 'react-select'
import { getPokemonByType } from '../lib/api'
import { getPokemonAsync, filterNoImage } from '../lib/utils'

export const typeOptions = [
  {value: 'normal', label: 'Normal'},
  {value: 'fire', label: 'Fire'},
  {value: 'water', label: 'Water'},
  {value: 'grass', label: 'Grass'},
  {value: 'electric', label: 'Electric'},
  {value: 'ice', label: 'Ice'},
  {value: 'fighting', label: 'Fighting'},
  {value: 'poison', label: 'Poison'},
  {value: 'ground', label: 'Ground'},
  {value: 'flying', label: 'Flying'},
  {value: 'psychic', label: 'Psychic'},
  {value: 'bug', label: 'Bug'},
  {value: 'rock', label: 'Rock'},
  {value: 'ghost', label: 'Ghost'},
  {value: 'dark', label: 'Dark'},
  {value: 'dragon', label: 'Dragon'},
  {value: 'steel', label: 'Steel'},
  {value: 'fairy', label: 'Fairy'},
]

const DropdownType = ({ allPokemon, setSelection }) => {

const changeHandler = async (type) => {
    try {
      const byTypeArr = await getPokemonByType(type)
      const filteredArr = filterNoImage(byTypeArr)
      const allByType = await getPokemonAsync(filteredArr)
      setSelection(allByType.slice(0).reverse())
    } catch (e) {
      console.error(e)
    }
}

return (
  <div>
    <Select
          placeholder={`Search Pokemon by Type`}
          options={typeOptions}
          instanceId="type-value-select"
          onChange={e => changeHandler(e.value)}
        />
  </div>
)
}

export default DropdownType