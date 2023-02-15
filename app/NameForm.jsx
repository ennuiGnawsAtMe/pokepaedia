'use client'

import { useContext } from 'react'
import { useState } from 'react'
import userContext from '../context/userContext'
import { useRouter } from 'next/navigation'

const NameForm = randomPokemon => {
  const [name, setName] = useState('')
  const [user, setUser] = useContext(userContext)
  const router = useRouter()

  const changeHandler = e => {
    setName(e)
  }

  const submitHandler = e => {
    e.preventDefault()
    setUser(name)
    router.push('/search')
  }

  return (
    <form
      className="flex h-1/2 flex-col space-y-4 xl:w-2/3"
      onSubmit={submitHandler}
    >
      <input
        autoFocus={true}
        maxLength={20}
        className=" min-w-[35vw] rounded-lg p-4 text-left font-mono text-3xl shadow-2xl shadow-slate-900 focus:outline-none md:text-4xl xl:text-6xl"
        type="text"
        value={name}
        placeholder="ENTER NAME"
        onChange={event => changeHandler(event.target.value)}
      />
      <div className={`flex flex-row justify-end ${!name ? 'hidden' : ''}`}>
        <p className="pr-4 font-sans text-xl text-white">&gt;&gt;&gt;</p>
        <button
          type="submit"
          className={`${
            !name ? 'hidden' : ''
          } text-right font-sans text-xl text-white  hover:font-semibold active:text-lime-400 lg:text-2xl xl:text-4xl`}
        >
          ENTER POKEPAEDIA
        </button>
      </div>
    </form>
  )
}

export default NameForm
