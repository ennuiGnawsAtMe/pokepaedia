import { useState } from 'react'
import '../styles/globals.css'
import pokemonCardsContext from '../lib/context/pokemonCardsContext.js'

function MyApp({ Component, pageProps }) {
  const [pokemonCards, setPokemonCards] = useState([])

  return (
      <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
        <Component {...pageProps} />
      </pokemonCardsContext.Provider> 
    )
}

export default MyApp
