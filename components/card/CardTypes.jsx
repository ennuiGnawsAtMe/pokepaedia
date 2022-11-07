import Image from "next/image";
import Link from 'next/link'
import styles from './CardTypes.module.css'
import Types from '../utils/Types'

const CardTypes = ({ image, name, attack, defense, specialAttack, speed, weight, specialDefense, height, experience, type }) => {

  return <>
  <div className={styles.imageContainer}>
   {/* <Link href={`/${name.toLowerCase()}`} >
     <a> */}
      <Image
        src={image}
        alt={name}
        fill
        sizes="100vw"
        style={{
          objectFit: "contain"
        }} />
      {/* </a>
   </Link> */}
  </div>
  <div className={styles.nameContainer}>
    <h2>{name}</h2>
  </div>
    <div className={styles.details}>
    <div className={styles.detailsTop}>
        <span><h4>Attack</h4><h3>{attack}</h3></span>
        <span><h4>Defence</h4><h3>{defense}</h3></span>
        <span><h4>Sp Attack</h4><h3>{specialAttack}</h3></span>
        <span><h4>Sp Defence</h4><h3>{specialDefense}</h3></span>
    </div>
    <div className={styles.detailsMiddle}>
        <span><h4>Height</h4><h3>{height}</h3></span>
        <span><h4>Weight</h4><h3>{weight}</h3></span>
        <span><h4>Speed</h4><h3>{speed}</h3></span>
        <span><h4>Experience</h4><h3>{experience}</h3></span>
    </div>
    <div className={styles.types}>
      {type.map(type => <Types key={type.url} type={type.type}/>)}
      </div>
      </div> 
  </>;
  }

export default CardTypes