'use client'

import NameForm from './NameForm'
import Image from 'next/image'
import bannerPokemonContext from '../context/bannerPokemonContext'
import { useContext } from 'react'

const BannerPokemon = ({ pokemonArray, selectedPokemon, image }) => {
  const [bannerPokemon, setBannerPokemon] = useContext(bannerPokemonContext)

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
