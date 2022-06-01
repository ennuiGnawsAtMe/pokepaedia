import Head from 'next/head'
import { useState } from 'react'
import RandomPokemon from '../components/RandomPokemon.jsx'
import { getRandomId  } from '../lib/controllers'
import prisma from '../lib/prisma.js'

export const getStaticProps = async () => {
  const randomInt = getRandomId()
    const pokemon = await prisma.pokemon.findUnique({
      where: {
        pokedex: randomInt,
      },
        select: { 
          name: true, 
          image: true, 
          blurb: true 
        }
      })
      return { props: { pokemon } }
  }

 const Home = ({ pokemon }) => {
  const [latestPokemon, setLatestPokemon] = useState(pokemon)

  return (
    <>
      <Head>
        <title>PokéPaedia | A Pokémon Encyclopaedia</title>
        <meta name="description" content="An Encyclopaedia of Pokemon" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <RandomPokemon {...latestPokemon} setState={setLatestPokemon}/>
      </main>
    </>
  )
}

export default Home