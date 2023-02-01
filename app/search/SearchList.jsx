'use client'

import { useContext, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from '../../components/card/Card'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import cardFacesContext from '../../context/cardFacesContext'
import Modal from '../../components/modal/Modal'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [showModal, setShowModal] = useState(false)
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <>
      <AnimatePresence>
        {showModal && <Modal setShowModal={setShowModal} {...pokemon} />}
      </AnimatePresence>
      <div className="z-0 m-auto mt-10 mb-[15vh] flex max-w-[1920px] flex-row flex-wrap justify-center overflow-hidden ">
        <AnimatePresence mode="wait">
          {pokemonCards.map(poke => (
            <Card
              key={poke.pokedex}
              pokemon={poke}
              setShowModal={setShowModal}
              setPokemon={setPokemon}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}

export default SearchList
