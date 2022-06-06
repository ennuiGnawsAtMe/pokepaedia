import Image from 'next/image'
import { useState } from 'react'
import { getRandomId } from '../lib/utils'
import styles from '../styles/RandomPokemon.module.css'

const RandomPokemon = ({ initialPokemon, allPokemon }) => {
  const [pokemon, setPokemon] = useState(initialPokemon)

  const clickHandler = () => {
        const randomInt = getRandomId()
        const randomPokemon = allPokemon.filter(poke => poke.pokedex === randomInt)
        setPokemon(randomPokemon[0])
  }

  return (
    <>
      <div className={styles.container} onClick={clickHandler} style={{cursor:"pointer"}}>
        <div className={styles.imageContainer}>
            <Image 
                src={pokemon.image}
                alt={pokemon.name}
                layout="fill" 
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
    </>
  )
}

export default RandomPokemon