'use client'

import { useContext } from 'react'
import userContext from '../../context/userContext'

const Welcome = () => {
  const [user, setUser] = useContext(userContext)

  return (
    <div className="m-4 flex flex-col justify-start rounded-lg bg-white p-2 text-right shadow-inner ">
      <h2 className=" p-2 font-sans text-5xl">Hi {user || 'Trainer'}!</h2>
    </div>
  )
}

export default Welcome
