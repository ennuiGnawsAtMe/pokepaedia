import Image from 'next/image'
import Link from 'next/link'
import ReactStars from 'react-rating-stars-component'
import styles from './CardImage.module.css'

const CardImage = ({ name, image, ratingOverall, ratings }) => {

  return (
    <>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
      </div>
      <div className={styles.overallRatings}>
        <div className={styles.starsWrapper}>
          <ReactStars 
            key={ratingOverall} 
            size={20} value={ratingOverall} 
            edit={false} 
            isHalf={true} 
          /> 
        </div>
        <h3>{ratingOverall} stars from {ratings.length} ratings</h3>
      </div>
      <div className={styles.imageContainer}>
       {/* <Link href={`/${name.toLowerCase()}`} > */}
         {/* <a> */}
          <Image src={image} alt={name} layout="fill" objectFit='contain' />
          {/* </a> */}
       {/* </Link> */}
      </div>
    </>
  )
  }

export default CardImage