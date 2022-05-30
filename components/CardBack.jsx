import Link from "next/link"
import Image from "next/image"
import styles from '../styles/CardBack.module.css'

const CardBack = (props) => {
  const poke = props.pokemon

  return (
    <div style={{border:`solid 5px ${props.colour}`}} className={styles.container}>
      <div className={styles.topDetail}>
        {poke.evolvesFrom?.name ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className={styles.imageText}>
        <h4>Pokédex:</h4><h3>{poke.id}</h3>
        <h4>hp:</h4><h3>{poke.hp}</h3>
        </div>
      </div>
        <div className={styles.imageContainer}>
          <Link href={`/${poke.name.toLowerCase()}`}>
              <a>
              <Image 
              src={poke.image}
              alt={props.name}
              layout="fill" 
              objectFit='contain'
              />
              </a>
          </Link>
        </div>
          <div className={styles.nameContainer}>
          <h2>
              <Link href={`/${poke.name.toLowerCase()}`}><a>
                  {poke.name}
                  </a></Link>
                  </h2>
          </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
          <span>
            <h4>Happiness</h4><h3>{poke.happiness}</h3>
            <h4>Special Abilities</h4>
            {poke.specialAbilities.map(ability => <h3 key={ability.url}>{ability.ability}</h3>)}
          </span>
          <span><h4>Shape</h4><h3>{poke.shape}</h3>
            <h4>Colour</h4><h3>{poke.colour}</h3>
            <h4>Habitat</h4><h3>{poke.habitat}</h3>
          </span>
        </div>
        <div className={styles.detailsMiddle}>
         
        </div>
          </div> 
          <div className={styles.footer}>
          <div className={styles.trainerDetails}>
           <h4>Ranking</h4><h3>#</h3>
           </div>
           <button onClick={props.flip} style={{cursor:"pointer"}}>&gt;&gt; Flip</button>
           </div>
      </div>
  )
  }

export default CardBack