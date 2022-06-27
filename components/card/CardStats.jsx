import Image from 'next/image'
import Link from 'next/link'
import styles from './CardStats.module.css'

const CardStats = ({ hp, happiness, ability, shape, habitat, image, name }) => {

  return (
    <>
    <div className={styles.imageContainer} style={{cursor:`pointer`}}>
       <Link href={`/${name.toLowerCase()}`} >
         <a><Image src={image} alt={name} layout="fill" objectFit='contain' /></a>
       </Link>
      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
      </div>
        <div className={styles.details}>
        <div className={styles.detailsTop}>
          <span>
            <h4>HP</h4><h3>{hp}</h3>
            <h4>Special Abilities</h4>
            {ability.map(ability => <h3 key={ability.url}>{ability.ability}</h3>)}
          </span>
          <span>
            <h4>Happiness</h4><h3>{happiness}</h3>
            <h4>Shape</h4><h3>{shape}</h3>
            <h4>Habitat</h4><h3>{habitat}</h3>
          </span>
        </div>
        </div> 
        </>
  )
  }

export default CardStats