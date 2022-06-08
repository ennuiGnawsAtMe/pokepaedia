import Head from 'next/head'
import { useContext, useEffect } from 'react'
import RandomPokemon from '../components/RandomPokemon.jsx'
import data from '../data/all.json'
import { getRandomPoke } from '../lib/utils.js'
import logoContext from '../context/logoContext'
import allPokemonContext from '../context/allPokemonContext.js'

export const getStaticProps = async () => {
    const allPokemonData = data.pokemon

    return {
      props : { allPokemonData }
    }
}

 const Home = ({ allPokemonData }) => {
    const [logo, setLogo] = useContext(logoContext)
    const [allPokemon, setAllPokemon] = useContext(allPokemonContext)

    useEffect(() => {
      const { imageLocal } = getRandomPoke(allPokemon)
      setLogo(imageLocal)
      setAllPokemon(allPokemonData)
    }, [])

    return (
      <>
        <Head>
          <title>PokéPaedia | A Pokémon Encyclopaedia</title>
          <meta name="description" content="An Encyclopaedia of Pokemon" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main>
          <RandomPokemon />
        </main>
      </>
    )
}

export default Home