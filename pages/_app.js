import { useState } from 'react'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import dropdownContext from '../context/dropdownContext'
import { Ibarra_Real_Nova } from '@next/font/google'

const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-ibarra',
})

function MyApp({ Component, pageProps }) {
  const [pokemonCards, setPokemonCards] = useState([])
  const [dropdown, setDropdown] = useState('name')

  return (
    <dropdownContext.Provider value={[dropdown, setDropdown]}>
      <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
        <main className={`${ibarraRealNova.variable} font-serif`}>
          <Component {...pageProps} />
        </main>
      </pokemonCardsContext.Provider>
    </dropdownContext.Provider>
  )
}

export default MyApp
