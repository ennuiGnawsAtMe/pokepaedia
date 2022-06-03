import { useState } from 'react'
import DropdownName from './DropdownName'
import DropdownType from './DropdownType'
import styles from '../styles/SearchNav.module.css'

const SearchNav = ({ allPokemon, selection, setSelection }) => {
  const [searchBy, setSearchBy] = useState('all') 

  const component = {
    'name': <DropdownName allPokemon={allPokemon} setSelection={setSelection} />,
    'type': <DropdownType allPokemon={allPokemon} setSelection={setSelection} />,
    'all': null
  }

  const clickHandler = (searchBy, selection = []) => {
    setSearchBy(searchBy)
    setSelection(selection)
  }

  return (
        <div className={styles.container}>
          <div className={styles.navContainer}>
          <div className={styles.stats}>
            {selection && <p>Total Pokémon: {selection.length}</p>}
          </div>
          <div className={styles.searchBy}>
            
            <button className={searchBy == 'all' ? styles.searchByHover : undefined} onClick={() => clickHandler('all', allPokemon)}>&gt;&gt;All Pokémon</button>
            <button onClick={() => clickHandler('name')}>&gt;&gt;By Name</button>
            <button onClick={() => clickHandler('type')}>&gt;&gt;By type</button>
            {/* <button>&gt;&gt;By Rating</button>
            <button>&gt;&gt;By Habitat</button>
            <button>&gt;&gt;By Colour</button> */}
          </div>
          </div>
          {component[searchBy]}
        </div>
  )
}

export default SearchNav