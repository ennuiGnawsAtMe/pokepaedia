// 'use client'

// import { useState, useEffect } from 'react'
import Image from 'next/image'
import pichu from '../public/images/pokemon/pichu.png'
import { getRandomValue, getRandomPoke } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'
import data from '../data/all.json'
import loading from '../public/images/loading.gif'
import RandomPokemon from './RandomPokemon'

const Home = () => {
  // const [name, setName] = useState('')
  // const [pokemon, setPokemon] = useState(loading)

  // const randomPokemon = getRandomValue(pokemonImages)
  // console.log(randomPokemon)

  const changeHandler = event => {
    // setName(event)
    console.log(name)
  }

  const submitHandler = event => {
    console.log(event)
    event.preventDefault()
  }

  // useEffect(() => {
  //   setPokemon(getRandomPoke(data.pokemon))
  // }, [])

  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <RandomPokemon />
      <div className="flex w-1/3 flex-col items-start space-y-10">
        <div className="flex flex-col text-right">
          <h1 className="text-7xl">Hey Trainer!</h1>
          <h2 className="font-mono text-3xl">What is your name?</h2>
        </div>
        <div className=" flex flex-row items-center">
          {/* <form
            className="h-20"
            onSubmit={event => handleSubmit(event.target.value)}
          >
            <input
              autoFocus={true}
              maxLength={20}
              className="h-full w-full rounded-md border-black p-4 text-right text-3xl focus:outline-none"
              type="text"
              value={name}
              onChange={event => changeHandler(event.target.value)}
            />
            <button
              className={`${
                !name ? 'hidden' : ''
              } duration-50 relative float-right w-[15vw] rounded-md bg-teal-400 p-2 text-center text-xl text-white shadow-md shadow-slate-400 ease-in-out hover:translate-y-px  hover:translate-x-px hover:bg-teal-500	hover:shadow-xl	active:scale-95	`}
            >
              Submit
            </button>
          </form> */}
          {/* <p
            className={`${
              name != '' ? '-translate-x-6' : ''
            } pl-6 text-6xl duration-75 ease-in-out will-change-transform`}
          >
            &larr;
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Home
