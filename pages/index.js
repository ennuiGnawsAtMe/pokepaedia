import Head from 'next/head'
import RandomPokemon from '../components/RandomPokemon.jsx'
import { getRandomId  } from '../lib/utils'
import prisma from '../lib/prisma.js'
import NavBar from '../components/NavBar.jsx'

export const getStaticProps = async () => {
    const randomInt = getRandomId()
    const allPokemon = await prisma.pokemon.findMany({
      select: {
        name: true,
        image: true,
        blurb: true,
        pokedex: true
      },
    })

    const initialPokemon = await prisma.pokemon.findUnique({
      where: {
        pokedex: randomInt
      },
      select: {
        name: true,
        image: true,
        blurb: true,
        pokedex: true
      },
    })

  
    return {
    props : { initialPokemon, allPokemon }
  }
}

 const Home = ({ initialPokemon, allPokemon }) => {

  return (
    <>
      <Head>
        <title>PokéPaedia | A Pokémon Encyclopaedia</title>
        <meta name="description" content="An Encyclopaedia of Pokemon" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <RandomPokemon initialPokemon={initialPokemon} allPokemon={allPokemon}/>
      </main>
    </>
  )
}

export default Home