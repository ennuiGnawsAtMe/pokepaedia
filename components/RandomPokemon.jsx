import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import allPokemonContext from '../context/allPokemonContext'
import { getRandomPoke } from '../lib/utils'
import styles from '../styles/RandomPokemon.module.css'
import Loading from './Loading'
import pokemonCardsContext from '../context/pokemonCardsContext'

const RandomPokemon = () => {
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
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

  return (
    <>
    {!isLoading 
      ? <div className={styles.container} onClick={clickHandler} style={{cursor:"pointer"}}>
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
        </div>
      : <Loading />
    }
    </>
  )
}

export default RandomPokemon