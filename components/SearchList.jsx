import Card from './Card'
import styles from '../styles/SearchList.module.css'

const SearchList = ({ selection }) => {

  return (
    <div className={styles.container}>
        {selection.slice(0).reverse().map(poke => (<Card key={poke.id} pokemon={poke} />))}
    </div>
  )
  }

export default SearchList