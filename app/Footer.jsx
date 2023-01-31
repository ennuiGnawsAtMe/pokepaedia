'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import FooterPokemon from './FooterPokemon'
import bannerPokemonContext from '../context/bannerPokemonContext'

const Footer = ({ pokemonArray, selectedPokemon, setSelectedPokemon }) => {
  const [footerHover, setFooterHover] = useState(false)
  const footerMon = pokemonArray.slice(1)
  const [footerArray, setFooterArray] = useState(footerMon)

  return (
    <AnimatePresence>
      <div className="flex w-[100vw] max-w-[1920px] shrink-0 flex-row justify-center ">
        {footerArray.map((pokemon, index) => (
          <FooterPokemon
            key={pokemon.pokedex}
            pokemon={pokemon}
            footerHover={footerHover}
            setFooterHover={setFooterHover}
            selectedPokemon={selectedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setFooterArray={setFooterArray}
            footerArray={footerArray}
          />
        ))}
      </div>
    </AnimatePresence>
  )
}

export default Footer
