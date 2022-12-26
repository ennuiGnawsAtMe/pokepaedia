'use client'

import Image from 'next/image'
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
            size={20}
            value={ratingOverall}
            edit={false}
            isHalf={true}
          />
        </div>
        <h3>
          {ratingOverall} stars from {ratings.length} ratings
        </h3>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={name}
          fill
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
