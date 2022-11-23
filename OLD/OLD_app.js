import { useState } from 'react'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import dropdownContext from '../context/dropdownContext'

function MyApp({ Component, pageProps }) {
  const [pokemonCards, setPokemonCards] = useState([])
  const [dropdown, setDropdown] = useState('name')

  return (
    <dropdownContext.Provider value={[dropdown, setDropdown]}>
      <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
        <Component {...pageProps} />
      </pokemonCardsContext.Provider>
    </dropdownContext.Provider>
  )
}

export default MyApp
