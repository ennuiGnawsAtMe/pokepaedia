import Head from 'next/head'
import prisma from '../lib/prisma'
import SearchNav from '../components/SearchNav'
import styles from '../styles/Home.module.css'

export const getStaticProps = async() => {
  const pokemonNames = await prisma.pokemon.findMany({
    select: { name: true }
  })
  return {
    props : { pokemonNames }
  }
}

 const Search = ({ pokemonNames }) => {
  return (
        <>
          <Head>
            <title>Search Pokémon</title>
            <meta name="description" content="An Encyclopaedia of Pokemon" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <SearchNav names={pokemonNames}/>
          </main>
          </>
  )
}

export default Search