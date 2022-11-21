'use client'

import { useState } from 'react'
import Image from 'next/image'
import pichu from '../public/images/pokemon/pichu.png'

const Home = () => {
  const [name, setName] = useState('')

  const changeHandler = e => {
    setName(e)
    console.log(name)
  }
  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="w-1/3">
        <Image src={pichu} alt={'Pichu!'} priority />
      </div>
      <div className="flex w-1/3 flex-col space-y-10">
        <div className="text-right">
          <h1 className="font-primary text-7xl hover:font-sans">
            Hey Trainer!
          </h1>
          <h2 className="font-mono text-3xl">What is your name?</h2>
        </div>
        <div className="flex flex-row items-center justify-end">
          <form className="h-20">
            <input
              autoFocus={true}
              maxLength={20}
              className="h-full w-full rounded-md border-black p-4 text-right text-3xl focus:outline-none"
              type="text"
              value={name}
              onChange={e => changeHandler(e.target.value)}
            />
          </form>
          <p
            className={`${
              name != '' ? '-translate-x-6' : ''
            } pl-6 text-6xl duration-75 ease-in-out will-change-transform`}
          >
            &larr;
          </p>
        </div>
        <div className="flex justify-end">
          <button
            className={`${
              !name ? 'hidden' : ''
            } duration-50 absolute w-[15vw] rounded-md bg-teal-500 p-2 text-center text-xl text-white shadow-md shadow-slate-400 ease-in-out hover:bg-teal-400  hover:shadow-xl active:scale-95	`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
