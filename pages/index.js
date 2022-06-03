import Head from 'next/head'
import RandomPokemon from '../components/RandomPokemon.jsx'
import { getRandomId  } from '../lib/utils'
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

  return (
    <>
      <Head>
        <title>PokéPaedia | A Pokémon Encyclopaedia</title>
        <meta name="description" content="An Encyclopaedia of Pokemon" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <RandomPokemon initialPokemon={pokemon} />
      </main>
    </>
  )
}

export default Home