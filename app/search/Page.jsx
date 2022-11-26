'use client'

import { useContext } from 'react'
import userContext from '../../context/userContext'

const Page = () => {
  const [user, setUser] = useContext(userContext)

  return <h1 className="text-lg">{user}</h1>
}

export default Page
