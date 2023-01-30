'use client'

import { useContext } from 'react'
import bannerPokemonContext from '../context/bannerPokemonContext'

const BannerBlurb = ({ selectedPokemon }) => {
  // const [bannerPokemon, setBannerPokemon] = useContext(bannerPokemonContext)
  // const { pokedex, name, blurb } = bannerPokemon

  return (
    <div className="m-auto flex w-[85vw]  max-w-[1920px] flex-col">
      <div className="flex flex-col space-y-4 font-sans">
        <h2 className=" text-3xl">#{selectedPokemon.pokedex}</h2>
        <h2 className="text-5xl font-semibold">{selectedPokemon.name}</h2>
        <h3 className="w-1/2 text-2xl">{selectedPokemon.blurb}</h3>
      </div>
    </div>
  )
}

export default BannerBlurb
