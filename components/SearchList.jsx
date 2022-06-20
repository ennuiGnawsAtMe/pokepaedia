import { useContext } from 'react'
import Card from './Card'
import styles from '../styles/SearchList.module.css'
import pokemonCardsContext from '../lib/context/pokemonCardsContext.js'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  return (
    <div className={styles.container}>
      {pokemonCards.map(poke => (<Card key={poke.pokedex} pokemon={poke} />))}  
    </div>
  )
  }

export default SearchList

