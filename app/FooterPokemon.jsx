'use client'

import Image from 'next/image'
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import bannerPokemonContext from '../context/bannerPokemonContext'
import { getPokemonImage } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'

const FooterPokemon = ({
  pokemon,
  footerHover,
  setFooterHover,
  setSelectedPokemon,
}) => {
  const [bannerPokemon, setBannerPokemon] = useContext(bannerPokemonContext)
  const [isHover, setIsHover] = useState(false)
  // const [thisPokemon, setThisPokemon] = useState(pokemon)
  const { pokedex, name, imageLocal } = pokemon
  const image = getPokemonImage(pokemonImages, name)

  const footerMonVariants = {
    hidden: {
      opacity: 0,
      translateY: 100,
    },
    visible: {
      opacity: 1,
      translateY: 0,
      transition: { duration: 0.2 },
    },
  }

  const mouseHandler = bool => {
    setFooterHover(bool)
    setIsHover(bool)
  }

  const clickHandler = () => {
    setSelectedPokemon(pokemon)
  }

  return (
    <motion.div
      className={`${
        footerHover && !isHover ? '!opacity-30' : ''
      } group relative flex w-[15vw] cursor-pointer flex-col rounded-b-md font-sans duration-200  `}
      variants={footerMonVariants}
      initial="hidden"
      animate="visible"
      onMouseEnter={() => {
        mouseHandler(true)
      }}
      onMouseLeave={() => {
        mouseHandler(false)
      }}
      onClick={clickHandler}
    >
      <div className="absolute -top-16 hidden w-full flex-col rounded-md bg-white p-2 pl-4 group-hover:flex">
        <h3 className=" text-lg ">#{pokedex}</h3>
        <h2 className=" font-semibold  md:text-sm lg:text-base xl:text-xl">
          {name}
        </h2>
      </div>
      <Image
        className=""
        alt="Gotta catch em all!"
        src={image}
        placeholder="blur"
      />
    </motion.div>
  )
}

export default FooterPokemon
