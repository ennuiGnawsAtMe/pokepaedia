import Image from 'next/image'
import { useState } from 'react'
import DropdownName from './DropdownName'
import DropdownType from './DropdownType'
import styles from '../styles/SearchNav.module.css'

const SearchNav = ({ names }) => {
  const [searchBy, setSearchBy] = useState('Name') 

  return (
        <div className={styles.container}>
          <div className={styles.searchBy}>
            <button onClick={() => setSearchBy('Name')}>&gt;&gt;By Name</button>
            <button onClick={() => setSearchBy('Type')}>&gt;&gt;By type</button>
            <button>&gt;&gt;By Rating</button>
            <button>&gt;&gt;By Habitat</button>
            <button>&gt;&gt;By Colour</button>
          </div>
          {searchBy === 'Name' ? <DropdownName names={names} /> : <DropdownType />}
        </div>
  )
}

export default SearchNav