import Head from 'next/head'
import { useState, useEffect } from 'react'
import RandomPokemon from '../components/RandomPokemon.jsx'
import { getRandomPokemon } from '../lib/controllers'
import { getPokemonAsync } from '../lib/controllers'
import data from '../data/data.json'

const allPokedex = data.pokemon.map(poke => poke.pokedex)

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

  const func = async (pokedexArray) => {
    console.log(pokedexArray)
    // const names = nameArray.map(poke => {
    //   if (poke.name === "Mr. Mime") {
    //     return "mr-mime"
    //   } else if (poke.name === "Mime Jr.") {
    //     return "mime-jr"
    //   } else {
    //     return poke.name.toLowerCase()
    //   }
    // })

    const pokemons = await getPokemonAsync(pokedexArray)
    console.log(pokemons)
  }

  useEffect(() => {
    func(allPokedex)
  }, [])

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