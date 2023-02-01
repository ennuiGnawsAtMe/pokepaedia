'use client'

import { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useGetAllPokemonDb } from '../../data/swr'
import CardStats from './CardStats'
import CardAbout from './CardAbout'
import CardTypes from './CardTypes'
import styles from './Card.module.css'
import CardImage from './CardImage'
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

const Card = ({ pokemon, setShowModal, setPokemon, variants }) => {
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)
  const [currentFace, setCurrentFace] = useState('image')
  const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

  const { pokedex, colour } = pokemon

  const { backgroundColor, color } = CARD_COLOURS[colour]

  const pokemonRatings = allPokemonDb.find(poke => poke.pokedex === pokedex)
  const { ranking } = pokemonRatings

  const clickHandlerRight = e => {
    e.stopPropagation()
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

  const clickHandlerLeft = e => {
    e.stopPropagation()
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

  const clickHandlerModal = () => {
    setShowModal(true)
    setPokemon({ ...pokemon, ...pokemonRatings })
  }

  useEffect(() => {
    setCurrentFace(cardFaces)
  }, [cardFaces])

  return (
    <>
      <motion.div
        style={{ border: `solid 5px ${backgroundColor}` }}
        className="group m-[10px] flex h-[450px] w-[320px] cursor-zoom-in flex-col items-center rounded-md border-4 border-[#47a8bd] p-4 "
        variants={variants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={clickHandlerModal}
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
        <div className="absolute top-1/3 flex w-full flex-row justify-between px-4 group-hover:visible md:invisible lg:invisible xl:invisible 2xl:invisible">
          <ChevronLeftIcon
            fill="currentColor"
            stroke="currentColor"
            onClick={clickHandlerLeft}
            className=" w-8 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-600 shadow-slate-500 drop-shadow-md duration-100 ease-in  hover:scale-105 hover:drop-shadow-lg active:drop-shadow-md"
          />
          <ChevronRightIcon
            fill="currentColor"
            stroke="currentColor"
            className="w-8 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-600 shadow-slate-500 drop-shadow-md duration-100 ease-in hover:scale-105 hover:drop-shadow-lg active:drop-shadow-md"
            onClick={clickHandlerRight}
          />
        </div>
      </motion.div>
    </>
  )
}

export default Card
