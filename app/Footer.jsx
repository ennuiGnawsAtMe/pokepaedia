'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import FooterPokemon from './FooterPokemon'
// import { pokemonImages } from '../data/imgDictionary'

const Footer = ({ pokemonArray }) => {
  const [footerHover, setFooterHover] = useState(false)
  const footerMon = pokemonArray.slice(1)

  return (
    <AnimatePresence>
      <div className="flex w-[100vw] max-w-[1920px] shrink-0 flex-row justify-center ">
        {footerMon.map((pokemon, index) => (
          <FooterPokemon
            key={pokemon.pokedex}
            pokemon={pokemon}
            footerHover={footerHover}
            setFooterHover={setFooterHover}
          />
        ))}
      </div>
    </AnimatePresence>
  )
}

export default Footer
