import Head from 'next/head'
import { useState } from 'react'
import prisma from '../../lib/prisma'
import SearchNav from '../../components/SearchNav'
import SearchList from '../../components/SearchList'

export const getStaticProps = async() => {
    const allPokemon = await prisma.pokemon.findMany({
      include: {
        type: true,
        ability: true,
      },
})
    return {
    props : { allPokemon }
  }

}

 const Search = ({ allPokemon }) => {
   const [selection, setSelection] = useState(allPokemon)

  return (
        <>
          <Head>
            <title>Search Pokémon</title>
            <meta name="description" content="An Encyclopaedia of Pokemon" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <SearchNav allPokemon={allPokemon} selection={selection} setSelection={setSelection}/>
            {selection && <SearchList selection={selection} />}
          </main>
          </>
  )
}

export default Search