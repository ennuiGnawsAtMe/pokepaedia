'use client'

import { useContext } from 'react'
import { AnimatePresence } from 'framer-motion'
import Card from '../../components/card/Card'
import pokemonCardsContext from '../../context/pokemonCardsContext.js'

const SearchList = () => {
  const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

  return (
    <div className="z-0 m-auto mt-[5vh] mb-[15vh] flex flex-row flex-wrap justify-center px-[3vw]">
      <AnimatePresence mode="wait">
        {pokemonCards.map(poke => (
          <Card key={poke.pokedex} pokemon={poke} />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SearchList
