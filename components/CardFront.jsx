import Link from 'next/link' 
import Image from 'next/image'
import styles from '../styles/CardFront.module.css'
import Types from './Types'

const CardFront = (props) => {
  const poke = props.pokemon

  return (
    <div style={{border:`solid 5px ${props.colour}`}} className={styles.container}>
      <div className={styles.topDetails}>
        {poke.evolvesFrom?.name ? <h3>EVOLUTION</h3> : <h3>BASIC</h3>}
        <div className={styles.imageText}>
        <h4>Pokédex:</h4><h3>{poke.id}</h3>
        <h4>hp:</h4><h3>{poke.hp}</h3>
        </div>
      </div>
        <div className={styles.imageContainer}>
          <Link href={`/search/${poke.name.toLowerCase()}`}>
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
              <Link href={`/search/${poke.name.toLowerCase()}`}><a>
                  {poke.name}
                  </a></Link>
                  </h2>
          </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
            <span><h4>Attack</h4><h3>{poke.attack}</h3></span>
            <span><h4>Defence</h4><h3>{poke.defense}</h3></span>
            <span><h4>Sp Attack</h4><h3>{poke.specialAttack}</h3></span>
            <span><h4>Sp Defence</h4><h3>{poke.specialDefense}</h3></span>
        </div>
        <div className={styles.detailsMiddle}>
            <span><h4>Height</h4><h3>{poke.height}ft</h3></span>
            <span><h4>Weight</h4><h3>{poke.weight}lbs</h3></span>
            <span><h4>Speed</h4><h3>{poke.speed}mph</h3></span>
            <span><h4>Experience</h4><h3>{poke.experience}yrs</h3></span>
        </div>
        <div className={styles.types}>
          {poke.type.map(type => <Types key={type} type={type}/>)}
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

export default CardFront