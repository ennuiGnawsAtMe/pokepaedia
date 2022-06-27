import { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from '../card/Card'
import styles from './SearchList.module.css'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  return (
      <div className={styles.container}>
        <AnimatePresence exitBeforeEnter>
          {pokemonCards.map((poke, i) => (<Card key={poke.pokedex} pokemon={poke} delay={i * 0.1} />))}  
        </AnimatePresence>
      </div>
  )
  }

export default SearchList

