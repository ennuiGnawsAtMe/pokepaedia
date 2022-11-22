'use client'

import { useState } from 'react'

const NameInput = () => {
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
    <div className="flex flex-col">
      <form
        className="flex h-24 flex-col items-center justify-start"
        onSubmit={event => handleSubmit(event.target.value)}
      >
        <input
          autoFocus={true}
          maxLength={20}
          className="mb-6 h-full w-full rounded-lg p-4 text-center font-mono text-5xl focus:outline-none"
          type="text"
          value={name}
          onChange={event => changeHandler(event.target.value)}
        />
        <div className={`flex flex-row ${!name ? 'hidden' : ''}`}>
          <p className="text-4xl text-white">&#8594;</p>
          <button
            className={`${
              !name ? 'hidden' : ''
            }  w-[250px]  p-2 text-center text-xl text-white  hover:translate-y-px  hover:translate-x-px	`}
          >
            Submit
          </button>
          <p className="text-4xl text-white">&#8592;</p>
        </div>
      </form>
    </div>
  )
}

export default NameInput
