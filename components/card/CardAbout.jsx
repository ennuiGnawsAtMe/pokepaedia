'use client'

import Image from 'next/image'
import styles from './CardAbout.module.css'

const CardAbout = ({ blurb, name, imageLocal }) => {
  return (
    <>
      <div className={styles.imageContainer}>
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
    </>
  )
}

export default CardAbout
