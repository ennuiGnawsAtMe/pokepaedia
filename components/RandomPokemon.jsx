import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import styles from '../styles/RandomPokemon.module.css'

const RandomPokemon = (props) => {
  const [pokemon, setPokemon] = useState(props.initialPokemon)

  const clickHandler = async () => {
    const res = await axios
        .get(`/api/getRandomPokemon`)
        setPokemon(res.data)
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