'use client'

import { useContext, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from '../../components/card/Card'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
  const [allCardFaces, setAllCardFaces] = useState('about')

  return (
    <div className="z-0 m-auto mt-[5vh] mb-[15vh] flex max-w-[1920px] flex-row flex-wrap justify-center px-[3vw]">
      <AnimatePresence mode="wait">
        {pokemonCards.map(poke => (
          <Card
            key={poke.pokedex}
            pokemon={poke}
            allCardFaces={allCardFaces}
            setAllCardFaces={setAllCardFaces}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SearchList
