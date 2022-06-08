import { useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import logoContext from '../context/logoContext'
import allPokemonContext from '../context/allPokemonContext'
import pokemonCardsContext from '../context/pokemonCardsContext'
import data from '../data/all.json'


function MyApp({ Component, pageProps }) {
  const [logo, setLogo] = useState('')
  const [allPokemon, setAllPokemon] = useState(data.pokemon)
  const [pokemonCards, setPokemonCards] = useState([])

  return (
    <pokemonCardsContext.Provider value={[pokemonCards, setPokemonCards]}>
      <allPokemonContext.Provider value={[allPokemon, setAllPokemon]}>
        <logoContext.Provider value={[logo, setLogo]}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </logoContext.Provider>
      </allPokemonContext.Provider>
    </pokemonCardsContext.Provider>
  )
}

export default MyApp
