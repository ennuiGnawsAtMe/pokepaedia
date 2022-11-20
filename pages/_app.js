import { useState } from 'react'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import dropdownContext from '../context/dropdownContext'
import { Syne_Mono } from '@next/font/google'

const sono = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
})

function MyApp({ Component, pageProps }) {
  const [pokemonCards, setPokemonCards] = useState([])
  const [dropdown, setDropdown] = useState('name')

  return (
    <dropdownContext.Provider value={[dropdown, setDropdown]}>
      <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
        <style jsx global>
          {`
            :root {
              ----font-sono: ${sono.style.fontFamily};
            }
          `}
        </style>
        <Component {...pageProps} />
      </pokemonCardsContext.Provider>
    </dropdownContext.Provider>
  )
}

export default MyApp
