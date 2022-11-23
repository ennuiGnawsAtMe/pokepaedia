'use client'

import { useState } from 'react'

const NameForm = randomPokemon => {
  const [name, setName] = useState('')

  const changeHandler = e => {
    setName(e)
    console.log(name)
  }

  const submitHandler = event => {
    console.log(event)
    event.preventDefault()
  }

  return (
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
      <div
        className={`group flex flex-row justify-between ${
          !name ? 'hidden' : ''
        }`}
      >
        <p className="font-sans text-xl text-white duration-200 ease-in-out group-hover:translate-x-36">
          &gt;&gt;&gt;
        </p>
        <button
          type="submit"
          className={`${
            !name ? 'hidden' : ''
          } text-right font-sans text-xl  text-white group-hover:text-lime-400`}
        >
          ENTER POKEPAEDIA
        </button>
      </div>
    </form>
  )
}

export default NameForm
