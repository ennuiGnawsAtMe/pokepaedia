import Head from 'next/head'
import { useState } from 'react'
import prisma from '../../lib/prisma'
import SearchList from '../../components/SearchList'
import NavBar from '../../components/NavBar'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'all' } },
      { params: { category: 'by-name' } },
      { params: { category: 'by-type' } },
      { params: { category: 'by-rating' } },
      { params: { category: 'by-colour' } },
      { params: { category: 'by-habitat' } },
    ], fallback: false }
  }

export const getStaticProps = async () => {
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

const Category = ({ allPokemon }) => {
  const [selection, setSelection] = useState(allPokemon)

  const handleState = (state) => {
    setSelection(state)
  }

  return (
        <>
          <Head>
            <title>Search Pokémon</title>
            <meta name="description" content="An Encyclopaedia of Pokemon" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <NavBar allPokemon={allPokemon} setSelection={handleState} />
            <SearchList selection={selection} />
          </main>
        </>
  )
}

export default Category