import { useContext } from 'react'
import Card from '../card/Card'
import styles from './SearchList.module.css'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  return (
    <div className={styles.container}>
      {pokemonCards.map(poke => (<Card key={poke.pokedex} pokemon={poke} />))}  
    </div>
  )
  }

export default SearchList

