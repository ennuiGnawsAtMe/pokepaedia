import Head from 'next/head'
import { useState } from 'react'
import prisma from '../../lib/prisma'
import SearchNav from '../../components/SearchNav'
import SearchList from '../../components/SearchList'
import { filterNoImage,  getPokemonAsync } from '../../lib/controllers'
import { getPokemonByType } from '../../lib/api'

const typeOptions = [
  'normal',
  'fire', 
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'psychic',
  'bug',
  'rock', 
  'ghost',
  'dark', 
  'dragon',
  'steel',
  'fairy',
]

export const getStaticProps = async() => {
  // let pokemonTypes = []
    // for (let i = 0; i < 1; i++) {
      // const typeArr = await getPokemonByType('fire')
      // console.log(typeArr)
      // const filteredArr = filterNoImage(typeArr)
      // const allByType = await getPokemonAsync(typeArr)
      // pokemonTypes.push([
      //   { type: i, pokemon: allByType}
      // ])
    // } 
    const pokemonNames = await prisma.pokemon.findMany({
    select: { name: true }
    })
    return {
    props : { pokemonNames }
  }

}

 const Search = ({ pokemonNames }) => {
   const [selection, setSelection] = useState([])
  //  console.log(pokemonTypes)

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