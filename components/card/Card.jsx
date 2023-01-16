'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGetAllPokemonDb } from '../../data/swr'
import CardStats from './CardStats'
import CardAbout from './CardAbout'
import CardTypes from './CardTypes'
import styles from './Card.module.css'
import CardImage from './CardImage'
import Modal from '../modal/Modal'

const CARD_COLOURS = {
  red: { backgroundColor: '#AB1E23', color: '#ffffff' },
  blue: { backgroundColor: '#1452E2', color: '#ffffff' },
  yellow: { backgroundColor: '#E3E32A', color: '#000000' },
  green: { backgroundColor: '#147B3E', color: '#ffffff' },
  black: { backgroundColor: '#313639', color: '#ffffff' },
  brown: { backgroundColor: '#994022', color: '#ffffff' },
  purple: { backgroundColor: '#5E2E87', color: '#ffffff' },
  gray: { backgroundColor: '#D1D1E0', color: '#000000' },
  white: { backgroundColor: '#f5f5f5', color: '#000000' },
  pink: { backgroundColor: '#A72B6E', color: '#ffffff' },
}

const Card = ({ pokemon }) => {
  const [cardFace, setCardFace] = useState('image')
  const [showModal, setShowModal] = useState(false)
  const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

  const { pokedex, colour } = pokemon

  const { backgroundColor, color } = CARD_COLOURS[colour]

  const pokemonRatings = allPokemonDb.find(poke => poke.pokedex === pokedex)
  const { ranking } = pokemonRatings

  const cardVariants = {
    hidden: {
      opacity: 0,
      translateX: -50,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      boxShadow: `5px 5px 5px rgb(0, 0, 0, 0.5)`,
      translateY: -8,
    },
  }

  const buttonVariants = {
    visible: {
      backgroundColor: backgroundColor,
      color: color,
      border: `solid 2px ${backgroundColor}`,
      // TODO add to CSS => borderBottom: "none"
    },
    hover: {
      backgroundColor: '#ffffff',
      border: `solid 2px ${backgroundColor}`,
      // TODO add to CSS => borderBottom: "none"
      transition: { duration: 0.3 },
      color: '#000000',
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.01 },
    },
  }

  const clickHandler = () => {
    if (cardFace === 'image') {
      setCardFace('about')
    } else if (cardFace === 'about') {
      setCardFace('types')
    } else if (cardFace === 'types') {
      setCardFace('ability')
    } else if (cardFace === 'ability') {
      setCardFace('image')
    }
  }

  const cardFaceComponent = {
    about: <CardAbout {...pokemon} />,
    types: <CardTypes {...pokemon} />,
    ability: <CardStats {...pokemon} />,
    image: <CardImage {...pokemon} {...pokemonRatings} />,
  }

  return (
    <>
      <motion.div
        style={{ border: `solid 5px ${backgroundColor}` }}
        className={styles.container}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className={[styles.topDetails]}>
          <div className={styles.imageText}>
            <h4>Pokédex</h4>
            <h3>{pokedex}</h3>
          </div>
          <span className={styles.rank}>
            <h4>Ranked</h4>
            <h3>{ranking}</h3>
          </span>
        </div>
        {cardFaceComponent[cardFace]}
        <div className={styles.footer}>
          {/* <Link href={`/${pokemon.name.toLowerCase()}`}>
            <motion.button
              style={{ cursor:`pointer` }} 
              variants={buttonVariants}
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              >
              - Details -
            </motion.button>
          </Link> */}
          <motion.button
            style={{ cursor: `pointer` }}
            onClick={() => clickHandler()}
            variants={buttonVariants}
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            - Flip -
          </motion.button>
          <motion.button
            style={{ cursor: `pointer` }}
            onClick={() => setShowModal(true)}
            variants={buttonVariants}
            animate="visible"
            whileHover="hover"
            whileTap="tap"
          >
            - Rate -
          </motion.button>
        </div>
      </motion.div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        {...pokemon}
        {...pokemonRatings}
      />
    </>
  )
}

export default Card
