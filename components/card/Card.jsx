'use client'

import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useGetAllPokemonDb } from '../../data/swr'
import CardStats from './CardStats'
import CardAbout from './CardAbout'
import CardTypes from './CardTypes'
import styles from './Card.module.css'
import CardImage from './CardImage'
import Modal from '../modal/Modal'
import cardFacesContext from '../../context/cardFacesContext'
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
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const [cardFace, setCardFace] = useState('image')
  const [currentFace, setCurrentFace] = useState('image')
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
    switch (currentFace) {
      case 'image':
        setCurrentFace('about')
        break
      case 'ability':
        setCurrentFace('image')
        break
      case 'types':
        setCurrentFace('ability')
        break
      case 'about':
        setCurrentFace('types')
        break
    }
  }

  const clickHandlerLeft = () => {
    switch (currentFace) {
      case 'image':
        setCurrentFace('ability')
        break
      case 'ability':
        setCurrentFace('types')
        break
      case 'types':
        setCurrentFace('about')
        break
      case 'about':
        setCurrentFace('image')
        break
    }
  }

  const cardFaceComponent = {
    about: <CardAbout {...pokemon} />,
    types: <CardTypes {...pokemon} />,
    ability: <CardStats {...pokemon} />,
    image: <CardImage {...pokemon} {...pokemonRatings} />,
  }

  useEffect(() => {
    setCurrentFace(cardFaces)
  }, [cardFaces])

  return (
    <>
      <motion.div
        style={{ border: `solid 5px ${backgroundColor}` }}
        className={['group', styles.container].join(' ')}
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
        {cardFaceComponent[currentFace]}
        <div className="invisible relative -top-3/4 flex w-full flex-row justify-between group-hover:visible">
          <ChevronLeftIcon
            fill="currentColor"
            stroke="currentColor"
            onClick={() => clickHandlerLeft()}
            className=" w-8 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-600 shadow-slate-500 drop-shadow-md duration-100 ease-in  hover:scale-105 hover:drop-shadow-lg active:drop-shadow-md"
          />
          <ChevronRightIcon
            fill="currentColor"
            stroke="currentColor"
            className="w-8 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-600 shadow-slate-500 drop-shadow-md duration-100 ease-in hover:scale-105 hover:drop-shadow-lg active:drop-shadow-md"
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
