import Link from "next/link"
import { useEffect } from "react"
import Image from "next/image"
import styles from '../styles/CardStats.module.css'

const CardStats = ({ pokemon, colour, flip }) => {
  const { backgroundColor, color } = colour

  return (
    <div style={{border:`solid 5px ${backgroundColor}`}} className={styles.container} onClick={flip}>
      <div className={styles.topDetail}>
        {pokemon.evolvesFrom ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className={styles.imageText}>
        <h4>Pokédex:</h4><h3>{pokemon.pokedex}</h3>
        <h4>hp:</h4><h3>{pokemon.hp}</h3>
        </div>
      </div>
        <div className={styles.imageContainer}>
              <Image 
              src={pokemon.image}
              alt={pokemon.name}
              layout="fill" 
              objectFit='contain'
              onClick={flip}
              />
        </div>
          <div className={styles.nameContainer}>
          <h2>
                  {pokemon.name}
                  </h2>
          </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
          <span>
            <h4>Happiness</h4><h3>{pokemon.happiness}</h3>
            <h4>Special Abilities</h4>
            {pokemon.ability.map(ability => <h3 key={ability.url}>{ability.ability}</h3>)}
          </span>
          <span><h4>Shape</h4><h3>{pokemon.shape}</h3>
            <h4>Colour</h4><h3>{pokemon.colour}</h3>
            <h4>Habitat</h4><h3>{pokemon.habitat}</h3>
          </span>
        </div>
        </div> 
          <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
           <button style={{color:`${color}`, cursor:`pointer`}} >Flip Card!</button>
           <Link href={`/${pokemon.name.toLowerCase()}`}>
             <button style={{color:`${color}`, cursor:`pointer`}}>Pokémon Details</button>
           </Link>
          </div>
      </div>
  )
  }

export default CardStats