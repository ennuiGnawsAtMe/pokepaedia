'use client'

import Image from 'next/image'
import ReactStars from 'react-rating-stars-component'
import styles from './CardImage.module.css'
import loading from '../../public/images/loading.gif'

const CardImage = ({ name, imageLocal, ratingOverall, ratings }) => {
  return (
    <>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
      </div>
      <div className={styles.overallRatings}>
        <h3>
          {ratingOverall} stars from {ratings.length} ratings
        </h3>
        <div className={styles.starsWrapper}>
          <ReactStars
            key={ratingOverall}
            size={20}
            value={ratingOverall}
            edit={false}
            isHalf={true}
          />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={imageLocal ? imageLocal : loading}
          alt={name}
          placeholder={imageLocal ? 'blur' : 'empty'}
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    </>
  )
}

export default CardImage
