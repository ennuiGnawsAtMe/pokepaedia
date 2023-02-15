'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { getPokemonImage } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'

const FooterPokemon = ({
  pokemon,
  footerHover,
  setFooterHover,
  setSelectedPokemon,
  setFooterArray,
  footerArray,
  selectedPokemon,
}) => {
  const [isHover, setIsHover] = useState(false)
  const { pokedex, name } = pokemon
  const image = getPokemonImage(pokemonImages, name)

  const footerMonVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, delay: 0.1 },
    },
  }

  const mouseHandler = bool => {
    setFooterHover(bool)
    setIsHover(bool)
  }

  const newFooterArray = () => {
    const toReplace = footerArray.map(poke =>
      poke.pokedex === pokedex ? { ...selectedPokemon } : poke
    )
    setFooterArray(toReplace)
  }

  const clickHandler = () => {
    newFooterArray()
    setSelectedPokemon(pokemon)
  }

  return (
    <motion.div
      className={`${
        footerHover && !isHover ? '!opacity-30' : ''
      } relative flex w-[15vw] flex-col rounded-b-md font-sans duration-200  `}
      variants={footerMonVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`absolute -top-20  w-full flex-col rounded-md bg-white p-2 pl-4 ${
          footerHover && isHover ? 'flex' : 'hidden'
        }`}
      >
        <h3 className=" text-lg ">#{pokedex}</h3>
        <h2 className=" font-semibold  md:text-sm lg:text-base xl:text-xl">
          {name}
        </h2>
      </div>
      <Image
        className=" cursor-pointer"
        alt="Gotta catch em all!"
        src={image}
        placeholder="blur"
        onMouseEnter={() => {
          mouseHandler(true)
        }}
        onMouseLeave={() => {
          mouseHandler(false)
        }}
        onClick={clickHandler}
      />
    </motion.div>
  )
}

export default FooterPokemon
