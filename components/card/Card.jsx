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
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

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
    },
    hover: {
      backgroundColor: '#ffffff',
      border: `solid 2px ${backgroundColor}`,
      transition: { duration: 0.3 },
      color: '#000000',
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.01 },
    },
  }

  const clickHandlerRight = () => {
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

  const clickHandlerLeft = () => {
    switch (cardFace) {
      case 'image':
        setCardFace('ability')
        break
      case 'ability':
        setCardFace('types')
        break
      case 'types':
        setCardFace('about')
        break
      case 'about':
        setCardFace('image')
        break
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
        <div className="relative -top-3/4 flex w-full flex-row justify-between">
          <ChevronLeftIcon
            fill="currentColor"
            stroke="currentColor"
            onClick={() => clickHandlerLeft()}
            className="w-8 cursor-pointer rounded-full p-1 text-gray-500 duration-200 ease-in-out hover:-translate-x-1 hover:bg-lime-400 hover:text-white"
          />
          <ChevronRightIcon
            fill="currentColor"
            stroke="currentColor"
            className="w-8 cursor-pointer rounded-full p-1 text-gray-500 duration-200 ease-in-out hover:translate-x-1 hover:bg-lime-400 hover:text-white"
            onClick={() => clickHandlerRight()}
          />
        </div>
        {/* <div className={styles.footer}> */}
        {/* <motion.button
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
          </motion.button> */}
        {/* </div> */}
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
