import { useState } from 'react'
import DropdownName from './DropdownName'
import DropdownType from './DropdownType'
import styles from '../styles/SearchNav.module.css'

const SearchNav = ({ selection, setSelection }) => {
  const [searchBy, setSearchBy] = useState('name') 

  const component = {
    'name': <DropdownName setSelection={setSelection} />,
    'type': <DropdownType setSelection={setSelection} />
  }

  return (
        <div className={styles.container}>
          <div className={styles.searchBy}>
            {selection.length && <p>Total Pokes: {selection.length}</p>}
            <button onClick={() => setSearchBy('name')}>&gt;&gt;By Name</button>
            <button onClick={() => setSearchBy('type')}>&gt;&gt;By type</button>
            {/* <button>&gt;&gt;By Rating</button>
            <button>&gt;&gt;By Habitat</button>
            <button>&gt;&gt;By Colour</button> */}
          </div>
          {component[searchBy]}
        </div>
  )
}

export default SearchNav