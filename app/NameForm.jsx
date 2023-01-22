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
    console.log(name)
  }

  const submitHandler = e => {
    e.preventDefault()
    setUser(name)
    router.push('/search')
  }

  return (
    <form className="flex h-24 flex-col space-y-4" onSubmit={submitHandler}>
      <input
        autoFocus={true}
        maxLength={20}
        className="min-w-[35vw] rounded-lg p-4 text-left font-mono text-3xl text-blue-900 shadow-md shadow-red-500 focus:outline-none"
        type="text"
        value={name}
        placeholder="Enter Name"
        onChange={event => changeHandler(event.target.value)}
      />
      <div className={`flex flex-row justify-end ${!name ? 'hidden' : ''}`}>
        <p className="pr-4 font-sans text-xl text-white">&gt;&gt;&gt;</p>
        <button
          type="submit"
          className={`${
            !name ? 'hidden' : ''
          } text-right font-sans text-xl  text-white hover:text-lime-400 active:scale-95`}
        >
          ENTER POKEPAEDIA
        </button>
      </div>
    </form>
  )
}

export default NameForm
