'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './CardAbout.module.css'

const CardAbout = ({ blurb, name, imageLocal, faceVariants }) => {
  return (
    <motion.div
      className="flex h-full w-full flex-col justify-start pt-4"
      variants={faceVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative flex h-full w-full">
        <Image
          src={imageLocal}
          alt={name}
          placeholder="blur"
          fill
          sizes="100vw"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className={styles.nameContainer}>
        <h2>{name}</h2>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsTop}>
          <p>{blurb}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default CardAbout
