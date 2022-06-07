import Head from 'next/head'
import { useState, useReducer } from 'react'
import SearchList from '../../components/SearchList'
import NavBar from '../../components/NavBar'
import data from '../../data/all.json'

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { category: 'by-name' } },
      { params: { category: 'by-type' } },
      { params: { category: 'by-colour' } },
      { params: { category: 'by-habitat' } },
    ], fallback: false }
}

export const getStaticProps = async () => {
    const allPokemon = data.pokemon

    return {
      props : { allPokemon }
    }
}

const Category = ({ allPokemon }) => {
  const [selection, setSelection] = useState([])

  return (
        <>
          <Head>
            <title>Search Pokémon</title>
            <meta name="description" content="An Encyclopaedia of Pokemon" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <NavBar allPokemon={allPokemon} selection={selection} setSelection={setSelection} />
            <SearchList allPokemon={allPokemon} selection={selection} setSelection={setSelection} />
          </main>
        </>
  )
}

export default Category