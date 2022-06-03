import Card from './Card'
import styles from '../styles/SearchList.module.css'

const SearchList = ({ selection }) => {

  return (
    <div className={styles.container}>
        {selection.map(poke => (<Card key={poke.name} pokemon={poke} />))}
    </div>
  )
  }

export default SearchList

