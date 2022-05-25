import Layout from '../components/Layout'
import '../styles/globals.css'
import React, { createContext, useState } from 'react'

export const pokemonContext = createContext()

function MyApp({ Component, pageProps }) {
  const [pokemon, setPokemon] = useState([])
  return (
    <pokemonContext.Provider value={{pokemon, setPokemon}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </pokemonContext.Provider>
  )
}

export default MyApp
