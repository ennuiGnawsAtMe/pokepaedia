'use client'

import { useState } from 'react'

const NameForm = () => {
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
          placeholder="Enter Name"
          className="mb-6 h-full w-full rounded-lg p-4 text-center font-mono text-5xl focus:outline-none"
          type="text"
          value={name}
          onChange={event => changeHandler(event.target.value)}
        />
        <div className={`flex flex-row ${!name ? 'hidden' : ''}`}>
          <button
            className={`${
              !name ? 'hidden' : ''
            }  w-[250px]  bg-teal-900 p-2 text-center text-xl  text-white  hover:translate-y-px hover:translate-x-px`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default NameForm
