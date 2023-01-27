'use client'

import { useState } from 'react'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import dropdownContext from '../context/dropdownContext'
import userContext from '../context/userContext'
import cardFacesContext from '../context/cardFacesContext.js'
import { useGetAllPokemonDb } from '../data/swr.js'

const ContextProvider = ({ children }) => {
  const [pokemonCards, setPokemonCards] = useState([])
  const [dropdown, setDropdown] = useState('name')
  const [user, setUser] = useState('')
  const [cardFaces, setCardFaces] = useState('image')
  const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

  return (
    <userContext.Provider value={[user, setUser]}>
      <dropdownContext.Provider value={[dropdown, setDropdown]}>
        <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
          <cardFacesContext.Provider value={[cardFaces, setCardFaces]}>
            {children}
          </cardFacesContext.Provider>
        </pokemonCardsContext.Provider>
      </dropdownContext.Provider>
    </userContext.Provider>
  )
}

export default ContextProvider
