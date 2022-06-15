import Head from 'next/head'
import { useContext } from 'react'
import { useAllPokemon } from '../lib/utils.js'
import RandomPokemon from '../components/RandomPokemon.jsx'
import data from '../data/all.json'
import pokemonCardsContext from '../context/pokemonCardsContext.js'
import { getAbilityOptions, getNameOptions, getHabitatOptions, getColourOptions, getShapeOptions, statusOptions, getTypeOptions, types } from '../lib/utils.js'
import NavBar from '../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import SearchList from '../components/SearchList.jsx'

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
    const { pokemonDb, isLoading, isError } = useAllPokemon()

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