'use client'

import { useContext, useEffect, useState } from 'react'
import NameForm from './NameForm'
import bannerPokemonContext from '../context/bannerPokemonContext'
import BannerPokemon from './BannerPokemon'
import BannerBlurb from './BannerBlurb'
import { getPokemonImage } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'
import Footer from './Footer'

const PageContent = ({ pokemonArray }) => {
  const [selectedPokemon, setSelectedPokemon] = useState(pokemonArray[0])
  const image = getPokemonImage(pokemonImages, selectedPokemon.name)

  return (
    <>
      <div className="flex h-[25vh] w-screen flex-row justify-center space-x-10 bg-gradient-to-r from-blue-900 via-lime-400 to-red-900 shadow-2xl shadow-slate-900">
        <div className="flex w-[85vw] max-w-[1920px] flex-row items-center justify-between">
          <NameForm />
          <BannerPokemon selectedPokemon={selectedPokemon} image={image} />
        </div>
      </div>
      <BannerBlurb selectedPokemon={selectedPokemon} />
      <Footer
        pokemonArray={pokemonArray}
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </>
  )
}

export default PageContent
