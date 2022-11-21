'use client'

import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRandomPoke } from '../../utils/helpers'
import styles from './RandomPokemon.module.css'
import Loading from './Loading'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'

import loadingGif from '/Users/lumirari/dev/pokepaedia/public/images/loading.gif'

const containerVariants = {
  hidden: {
    opacity: 0,
    translateX: -50,
    transition: { duration: 0.5, delay: 0.2 },
  },
  visible: {
    opacity: 1,
    translateX: 0,
    transition: { duration: 0.5, delay: 0.2 },
  },
  exit: {
    opacity: 0,
    translateX: 50,
    transition: { duration: 0.3 },
  },
}

const RandomPokemon = ({ allPokemon }) => {
  const [pokemon, setPokemon] = useState({})
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [isLoading, setIsLoading] = useState(true)

  const clickHandler = () => {
    setIsLoading(true)
    setPokemon(getRandomPoke(allPokemon))
  }

  useEffect(() => {
    setPokemon(getRandomPoke(allPokemon))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonCards])

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={styles.imageContainer}>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            priority
            onLoadingComplete={() => setIsLoading(false)}
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.details}>
          <button style={{ cursor: 'pointer' }} onClick={clickHandler}>
            &gt;&gt;&gt; Next Pokémon
          </button>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.blurb}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RandomPokemon
