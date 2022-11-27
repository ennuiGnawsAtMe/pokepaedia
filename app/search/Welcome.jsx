'use client'

import { useContext } from 'react'
import userContext from '../../context/userContext'

const Welcome = () => {
  const [user, setUser] = useContext(userContext)

  return (
    <div className="flex flex-col justify-center p-4 text-right">
      <h2 className=" font-sans text-5xl text-white">
        Hi {user || 'Trainer'}!
      </h2>
      <h4 className="text-lime-400">Choose a category to search by...</h4>
    </div>
  )
}

export default Welcome
