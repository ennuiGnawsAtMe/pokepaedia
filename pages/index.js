import Head from 'next/head'
import { useContext, useEffect } from 'react'
import RandomPokemon from '../components/RandomPokemon.jsx'
import data from '../data/all.json'
import allPokemonContext from '../context/allPokemonContext.js'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import SearchList from '../components/SearchList.jsx'

export const getStaticProps = async () => {
    const allPokemonData = data.pokemon

    return {
      props : { allPokemonData }
    }
}

 const Home = ({ allPokemonData }) => {
    const [allPokemon, setAllPokemon] = useContext(allPokemonContext)
    const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)

    useEffect(() => {
      setAllPokemon(allPokemonData)
    }, [])

    return (
      <>
        <Head>
          <title>PokéPaedia | A Pokémon Encyclopaedia</title>
          <meta name="description" content="An Encyclopaedia of Pokemon" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main>
          {pokemonCards.length === 0 
          ? <RandomPokemon />
          : <SearchList />}
        </main>
      </>
    )
}

export default Home