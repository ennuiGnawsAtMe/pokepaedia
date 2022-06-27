import Head from 'next/head'
import { useContext } from 'react'
import { motion } from 'framer-motion'
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
          <meta name="description" content="Come explore Pokepaedia, an encyclopaedia of Pokemon from Pikachu and Snorlax to Flapple and Dreepy, we got them all!" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 0.5 } 
          }}
        >
         <NavBar options={options} allPokemon={pokemonJson} />
         {pokemonCards.length === 0 ? <RandomPokemon allPokemon={pokemonJson} /> : <SearchList />}
         <Footer />
        </motion.main>
      </>

    )
}

export default Home