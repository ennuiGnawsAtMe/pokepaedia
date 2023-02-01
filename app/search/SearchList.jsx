'use client'

import { useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Card from '../../components/card/Card'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import cardFacesContext from '../../context/cardFacesContext'
import Modal from '../../components/modal/Modal'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [showModal, setShowModal] = useState(false)
  const [pokemon, setPokemon] = useState({})

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      boxShadow: `5px 5px 5px rgb(0, 0, 0, 0.5)`,
      transition: {
        duration: 1,
      },
    },
    hover: {
      y: -8,
      boxShadow: `none`,
    },
  }

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <>
      <AnimatePresence>
        {showModal && <Modal setShowModal={setShowModal} {...pokemon} />}
      </AnimatePresence>
      <div className="z-0 m-auto mt-10 mb-[15vh] flex max-w-[1920px] flex-row flex-wrap justify-center overflow-hidden ">
        <AnimatePresence>
          {pokemonCards.map(poke => (
            <Card
              key={poke.pokedex}
              pokemon={poke}
              setShowModal={setShowModal}
              setPokemon={setPokemon}
              variants={cardVariants}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default SearchList
