import Link from 'next/link' 
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/CardTypes.module.css'
import Types from './Types'

const CardTypes = ({ pokemon, colour, flip }) => {
    const { backgroundColor, color } = colour

  return (
    <div style={{border:`solid 5px ${backgroundColor}`}} className={styles.container} >
      <div className={styles.topDetails}>
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
            <h2>{pokemon.name}</h2>
          </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
            <span><h4>Attack</h4><h3>{pokemon.attack}</h3></span>
            <span><h4>Defence</h4><h3>{pokemon.defense}</h3></span>
            <span><h4>Sp Attack</h4><h3>{pokemon.specialAttack}</h3></span>
            <span><h4>Sp Defence</h4><h3>{pokemon.specialDefense}</h3></span>
        </div>
        <div className={styles.detailsMiddle}>
            <span><h4>Height</h4><h3>{pokemon.height}ft</h3></span>
            <span><h4>Weight</h4><h3>{pokemon.weight}lbs</h3></span>
            <span><h4>Speed</h4><h3>{pokemon.speed}mph</h3></span>
            <span><h4>Experience</h4><h3>{pokemon.experience}yrs</h3></span>
        </div>
        <div className={styles.types}>
          {pokemon.type.map(type => <Types key={type.url} type={type.type}/>)}
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

export default CardTypes