import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getRandomPoke } from '../../lib/funcs'
import styles from './RandomPokemon.module.css'
import Loading from './Loading'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'

const RandomPokemon = ({ allPokemon }) => {
  const [pokemon, setPokemon] = useState({})
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [isLoading, setIsLoading] = useState(true)

  const clickHandler = () => {
    setIsLoading(true)
    setPokemon(getRandomPoke(allPokemon))
    setIsLoading(false)
  }

  useEffect(() => {
    setPokemon(getRandomPoke(allPokemon))
    setIsLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonCards])

  console.log('rerender')

  return (
    <>
    {!isLoading 
      ? <motion.div 
          className={styles.container} 
          onClick={clickHandler} 
          style={{cursor:"pointer"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className={styles.imageContainer}>
              <Image 
                  src={pokemon.image}
                  alt={pokemon.name}
                  layout='fill'
                  objectFit='contain'
                  priority
              />
          </div>
          <div className={styles.details}>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.blurb}</p>
            <button style={{cursor:"pointer"}}>&gt;&gt;&gt; Next</button>
          </div>
        </motion.div>
      : <Loading />
    }
    </>
  )
}

export default RandomPokemon