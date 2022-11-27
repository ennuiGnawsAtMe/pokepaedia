'use client'

import { useContext } from 'react'
import userContext from '../../context/userContext'

const Welcome = () => {
  const [user, setUser] = useContext(userContext)

  return (
    <div className="flex flex-col">
      <h2 className="font-sans text-6xl text-white">Hi {user || 'Trainer'}!</h2>
    </div>
  )
}

export default Welcome
