import { useState } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </allPokemonContext.Provider>
    </pokemonCardsContext.Provider>
  )
}

export default MyApp
