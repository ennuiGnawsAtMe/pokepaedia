import Head from 'next/head'
import { useState } from 'react'
import prisma from '../lib/prisma'
import SearchNav from '../components/SearchNav'
import SearchList from '../components/SearchList'

export const getStaticProps = async() => {
  const pokemonNames = await prisma.pokemon.findMany({
    select: { name: true }
  })

  return {
    props : { pokemonNames }
  }
}

 const Search = ({ pokemonNames }) => {
   const [selection, setSelection] = useState([])

  return (
        <>
          <Head>
            <title>Search Pokémon</title>
            <meta name="description" content="An Encyclopaedia of Pokemon" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <SearchNav names={pokemonNames} selection={selection} setSelection={setSelection}/>
            <SearchList selection={selection}/>
          </main>
          </>
  )
}

export default Search