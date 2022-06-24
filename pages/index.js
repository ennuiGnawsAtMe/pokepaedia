import Head from 'next/head'
import { useContext } from 'react'
import { useGetAllPokemonDb } from '../lib/swr/useGetAllPokemonDb'
import RandomPokemon from '../components/utils/RandomPokemon.jsx'
import data from '../data/all.json'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import { getAbilityOptions, getNameOptions, getHabitatOptions, getColourOptions, getShapeOptions, getTypeOptions } from '../lib/funcs'
import { statusOptions, types }from '../lib/vars'
import NavBar from '../components/layout/NavBar.jsx'
import Footer from '../components/layout/Footer.jsx'
import SearchList from '../components/utils/SearchList.jsx'

export const getStaticProps = async () => {
    const pokemonJson = data.pokemon

    const abilityOptions = getAbilityOptions(pokemonJson)
    const colourOptions = getColourOptions(pokemonJson)
    const habitatOptions = getHabitatOptions(pokemonJson)
    const nameOptions = getNameOptions(pokemonJson)
    const shapeOptions = getShapeOptions(pokemonJson)
    const typeOptions = getTypeOptions(types)

    const options = { abilityOptions, colourOptions, habitatOptions, nameOptions, shapeOptions, statusOptions, typeOptions }

    return {
      props : { pokemonJson, options }
    }
}

 const Home = ({ pokemonJson, options }) => {
    const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
    const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

    return (
       <>
        <Head>
          <title>PokéPaedia | A Pokémon Encyclopaedia</title>
          <meta name="description" content="An Encyclopaedia of Pokemon" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main>
         <NavBar options={options} allPokemon={pokemonJson} />
         {pokemonCards.length === 0 ? <RandomPokemon allPokemon={pokemonJson} /> : <SearchList />}
         <Footer />
        </main>
      </>

    )
}

export default Home