'use client'

import NameForm from './NameForm'
import Image from 'next/image'
import bannerPokemonContext from '../context/bannerPokemonContext'
import { getPokemonImage } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'
import { useContext, useEffect, useState } from 'react'

const BannerPokemon = ({ pokemonArray, selectedPokemon, image }) => {
  const [bannerPokemon, setBannerPokemon] = useContext(bannerPokemonContext)
  // const [thisPokemon, setThisPokemon] = useState(pokemonArray[0])
  // const image = getPokemonImage(pokemonImages, thisPokemon.name)

  return (
    <div className="mt-[35vh] flex shrink-0">
      <Image
        className="relative rounded-2xl"
        src={image}
        alt={selectedPokemon.name}
        priority
        placeholder="blur"
      />
    </div>
  )
}

export default BannerPokemon
