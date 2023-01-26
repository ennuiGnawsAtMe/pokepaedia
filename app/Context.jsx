'use client'

import { useState } from 'react'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import dropdownContext from '../context/dropdownContext'
import userContext from '../context/userContext'
import { useGetAllPokemonDb } from '../data/swr.js'

const ContextProvider = ({ children }) => {
  const [pokemonCards, setPokemonCards] = useState([])
  const [dropdown, setDropdown] = useState('name')
  const [user, setUser] = useState('')
  const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

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
