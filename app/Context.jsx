'use client'

import { useState } from 'react'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import dropdownContext from '../context/dropdownContext'
import userContext from '../context/userContext'

const dropdownObject = {
  category: '',
}

const ContextProvider = ({ children }) => {
  const [pokemonCards, setPokemonCards] = useState([])
  const [dropdown, setDropdown] = useState('Search by Name')
  const [user, setUser] = useState('')

  return (
    <userContext.Provider value={[user, setUser]}>
      <dropdownContext.Provider value={[dropdown, setDropdown]}>
        <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
          {children}
        </pokemonCardsContext.Provider>
      </dropdownContext.Provider>
    </userContext.Provider>
  )
}

export default ContextProvider
