import Image from 'next/image'
import Link from 'next/link'
import ReactStars from 'react-rating-stars-component'
import styles from './CardAbout.module.css'

const CardAbout = ({ blurb, pokedex, ratingOverall, name, image }) => {

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
      <ReactStars key={ratingOverall} size={20} value={ratingOverall} edit={false} isHalf={true} />
      <div className={styles.details}>
        <div className={styles.detailsTop}>
          <p>{blurb}</p> 
        </div>
      </div> 
    </>
  )
  }

export default CardAbout