'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './CardStats.module.css'

const CardStats = ({
  hp,
  happiness,
  ability,
  shape,
  habitat,
  imageLocal,
  name,
  faceVariants,
}) => {
  return (
    <motion.div
      variants={faceVariants}
      initial="hidden"
      animate="visible"
      className="flex h-full w-full flex-col justify-start pt-4 text-center"
    >
      <div className="relative flex h-full w-full">
        <Image
          src={imageLocal}
          alt={name}
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
          <span>
            <h4>HP</h4>
            <h3>{hp}</h3>
            <h4>Special Abilities</h4>
            {ability.map(ability => (
              <h3 key={ability.url}>{ability.ability}</h3>
            ))}
          </span>
          <span>
            <h4>Happiness</h4>
            <h3>{happiness}</h3>
            <h4>Shape</h4>
            <h3>{shape}</h3>
            <h4>Habitat</h4>
            <h3>{habitat}</h3>
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default CardStats
