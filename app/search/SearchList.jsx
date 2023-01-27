'use client'

import { useContext, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from '../../components/card/Card'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'
import cardFacesContext from '../../context/cardFacesContext'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [cardFaces, setCardFaces] = useContext(cardFacesContext)

  // useEffect(() => {
  //   console.log(pokemonCards)
  // }, [pokemonCards])

  return (
    <div className="z-0 m-auto mt-10 mb-[15vh] flex max-w-[1920px] flex-row flex-wrap justify-center ">
      <AnimatePresence mode="wait">
        {pokemonCards.map(poke => (
          <Card key={poke.pokedex} pokemon={poke} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SearchList
