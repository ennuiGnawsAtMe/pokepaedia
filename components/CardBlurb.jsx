import Link from 'next/link' 
import Image from 'next/image'
import styles from '../styles/CardBlurb.module.css'

const CardBlurb = ({ pokemon, colour, flip }) => {
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
        <div className={styles.imageContainer} style={{cursor:`pointer`}}>
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
            <p>{pokemon.blurb}</p>
        </div>
          </div> 
          <div style={{backgroundColor:`${backgroundColor}`}} className={styles.footer}>
           <button style={{color:`${color}`, cursor:`pointer`}} onClick={flip}>Flip Card!</button>
           <button style={{color:`${color}`, cursor:`pointer`}}>
             <Link href={`/${pokemon.name.toLowerCase()}`}><a>Pokémon Details</a></Link>
           </button>
           
          </div>
      </div>
  )
  }

export default CardBlurb