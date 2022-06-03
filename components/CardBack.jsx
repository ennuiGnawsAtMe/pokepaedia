import Link from "next/link"
import Image from "next/image"
import styles from '../styles/CardBack.module.css'

const CardBack = ({ pokemon, colour, flip}) => {

  return (
    <div style={{border:`solid 5px ${colour}`}} className={styles.container}>
      <div className={styles.topDetail}>
        {pokemon.evolvesFrom?.name ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className={styles.imageText}>
        <h4>Pokédex:</h4><h3>{pokemon.pokedex}</h3>
        <h4>hp:</h4><h3>{pokemon.hp}</h3>
        </div>
      </div>
        <div className={styles.imageContainer}>
          <Link href={`/search/${pokemon.name.toLowerCase()}`}>
              <a>
              <Image 
              src={pokemon.image}
              alt={pokemon.name}
              layout="fill" 
              objectFit='contain'
              />
              </a>
          </Link>
        </div>
          <div className={styles.nameContainer}>
          <h2>
              <Link href={`/search/${pokemon.name.toLowerCase()}`}><a>
                  {pokemon.name}
                  </a></Link>
                  </h2>
          </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
          <span>
            <h4>Happiness</h4><h3>{pokemon.happiness}</h3>
            <h4>Special Abilities</h4>
            {pokemon.ability.map(ability => <h3 key={ability.id}>{ability.ability}</h3>)}
          </span>
          <span><h4>Shape</h4><h3>{pokemon.shape}</h3>
            <h4>Colour</h4><h3>{pokemon.colour}</h3>
            <h4>Habitat</h4><h3>{pokemon.habitat}</h3>
          </span>
        </div>
        <div className={styles.detailsMiddle}>
         
        </div>
          </div> 
          <div className={styles.footer}>
          <div className={styles.trainerDetails}>
           <h4>Ranking</h4><h3>#</h3>
           </div>
           <button onClick={flip} style={{cursor:"pointer"}}>&gt;&gt; Flip</button>
           </div>
      </div>
  )
  }

export default CardBack