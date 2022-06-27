import Image from 'next/image'
import Link from 'next/link'
import ReactStars from 'react-rating-stars-component'
import styles from './CardImage.module.css'

const CardImage = ({ name, image, ratingOverall }) => {

  return (
    <>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
      </div>
      <div>
        <ReactStars key={ratingOverall} size={30} value={ratingOverall} edit={false} isHalf={true} /> 
      </div>
      <div className={styles.imageContainer} style={{cursor:`pointer`}}>
       <Link href={`/${name.toLowerCase()}`} >
         <a><Image src={image} alt={name} layout="fill" objectFit='contain' /></a>
       </Link>
      </div>
    </>
  )
  }

export default CardImage