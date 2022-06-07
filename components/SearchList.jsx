import { useRouter } from 'next/router'
import Card from './Card'
import styles from '../styles/SearchList.module.css'
import DropdownName from './DropdownName'
import DropdownType from './DropdownType'
import DropdownHabitat from './DropdownHabitat'
import DropdownColour from './DropdownColour'

const SearchList = ({ selection, setSelection, allPokemon }) => {
  const router = useRouter()
  const { category } = router.query

    const dropdowns = {
    'all': null,
    'by-name': <DropdownName allPokemon={allPokemon} setSelection={setSelection}/>,
    'by-type': <DropdownType allPokemon={allPokemon} setSelection={setSelection}/>,
    'by-habitat': <DropdownHabitat allPokemon={allPokemon} setSelection={setSelection}/>,
    'by-colour': <DropdownColour allPokemon={allPokemon} setSelection={setSelection}/>,
  }

  return (
    <div className={styles.container}>
      {selection.map(poke => (<Card key={poke.name} pokemon={poke} />))}  
    </div>
  )
  }

export default SearchList

