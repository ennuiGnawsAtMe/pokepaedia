import Image from 'next/image'
import { useState, useContext } from 'react'
import allPokemonContext from '../context/allPokemonContext'
import { getRandomPoke } from '../lib/utils'
import styles from '../styles/RandomPokemon.module.css'
import pokemonImages from '../data/imgDictionary'

const RandomPokemon = () => {
  const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
  const [pokemon, setPokemon] = useState(allPokemon[0])

  console.log(pokemon)

  const clickHandler = () => {
    setPokemon(getRandomPoke(allPokemon))
  }

  return (
      <div className={styles.container} onClick={clickHandler} style={{cursor:"pointer"}}>
        <div className={styles.imageContainer}>
            <Image 
                src={pokemon.imageLocal}
                alt={pokemon.name}
                width={475}
                height={475}
                priority
            />
        </div>
        <div className={styles.details}>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.blurb}</p>
          <button style={{cursor:"pointer"}}>&gt;&gt;&gt; Next</button>
        </div>
      </div>
  )
}

export default RandomPokemon