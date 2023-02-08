'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ReactStars from 'react-rating-stars-component'
import styles from './CardImage.module.css'
import loading from '../../public/images/loading.gif'

const CardImage = ({
  name,
  ratingOverall,
  imageLocal,
  ratings,
  faceVariants,
}) => {
  return (
    <motion.div
      variants={faceVariants}
      initial={false}
      animate="visible"
      className="flex h-full w-full flex-col justify-start text-center"
    >
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
      <div className="relative flex h-full w-full">
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
    </motion.div>
  )
}

export default CardImage
