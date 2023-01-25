'use client'

import { useContext } from 'react'
import userContext from '../../context/userContext'

const Welcome = () => {
  const [user, setUser] = useContext(userContext)

  return (
    <div className="flex flex-col justify-center p-4 text-right">
      <h2 className="rounded-md bg-black p-2 font-sans text-5xl text-white">
        Hi {user || 'Trainer'}!
      </h2>
    </div>
  )
}

export default Welcome
