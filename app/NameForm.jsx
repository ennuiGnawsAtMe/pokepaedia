'use client'

import Image from 'next/image'
import { useState } from 'react'
import { pokemonImages } from '../data/imgDictionary'

const NameForm = randomPokemon => {
  const [name, setName] = useState('')
  const { imageLocal } = randomPokemon

  const changeHandler = e => {
    setName(e)
    console.log(name)
  }

  const submitHandler = event => {
    console.log(event)
    event.preventDefault()
  }

  return (
    <div className="mt-48 flex h-48 w-screen flex-row items-center justify-center space-x-10 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-red-500">
      <form
        className="flex h-24 flex-col space-y-4"
        onSubmit={event => handleSubmit(event.target.value)}
      >
        <input
          autoFocus={true}
          maxLength={20}
          placeholder="Enter Name"
          className=" rounded-lg p-4 text-left font-mono text-3xl shadow-xl shadow-slate-500 focus:outline-none"
          type="text"
          value={name}
          onChange={event => changeHandler(event.target.value)}
        />
        <div className={`flex flex-row justify-end ${!name ? 'hidden' : ''}`}>
          <button
            type="submit"
            className={`${
              !name ? 'hidden' : ''
            } text-right text-xl font-extrabold text-white `}
          >
            &gt; Enter Pokepaedia
          </button>
        </div>
      </form>
      <div className="flex">
        <Image src={imageLocal} alt={'I Choose You!'} priority />
      </div>
    </div>
  )
}

export default NameForm
