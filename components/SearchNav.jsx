import { useState } from 'react'
import DropdownName from './DropdownName'
import DropdownType from './DropdownType'
import styles from '../styles/SearchNav.module.css'

const SearchNav = ({ names, selection, setSelection }) => {
  const [searchBy, setSearchBy] = useState('Name') 

  return (
        <div className={styles.container}>
          <div className={styles.searchBy}>
            {selection.length && <p>Total Pokes: {selection.length}</p>}
            <button onClick={() => setSearchBy('Name')}>&gt;&gt;By Name</button>
            <button onClick={() => setSearchBy('Type')}>&gt;&gt;By type</button>
            <button>&gt;&gt;By Rating</button>
            <button>&gt;&gt;By Habitat</button>
            <button>&gt;&gt;By Colour</button>
          </div>
          {searchBy === 'Name' 
            ? <DropdownName names={names} setSelection={setSelection} /> 
            : <DropdownType setSelection={setSelection} />}
        </div>
  )
}

export default SearchNav