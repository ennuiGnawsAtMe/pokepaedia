import Head from 'next/head'
import { useState } from 'react'
import Loading from '../components/Loading'
import RandomPokemon from '../components/RandomPokemon'
import { getRandomPokemon } from '../lib/controllers'

export const getServerSideProps = async() => {
  const pokemons = await getRandomPokemon()
  return {
    props: { pokemon: pokemons }
  }
}

 const Home = ({ pokemon }) => {
  const [latestPokemon, setLatestPokemon] = useState(pokemon)

  const fetchPokemon = async() => {
    try {
      const newPokemon = await getRandomPokemon()
      setLatestPokemon(newPokemon)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Head>
        <title>PokéPaedia | A Pokémon Encyclopaedia</title>
        <meta name="description" content="An Encyclopaedia of Pokemon" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <RandomPokemon {...latestPokemon} clickHandler={fetchPokemon} />
      </main>
    </>
  )
}

export default Home