// import Head from 'next/head'
// import { useContext } from 'react'
// import { motion } from 'framer-motion'
// import { useGetAllPokemonDb } from '../utils/swr'
// import data from '../data/all.json'
// import pokemonCardsContext from '../context/pokemonCardsContext.js'
// import {
//   getAbilityOptions,
//   getHabitatOptions,
//   getColourOptions,
//   getShapeOptions,
//   getTypeOptions,
// } from '../utils/helpers'
// import { statusOptions, types } from '../utils/constants'
// import NavBar from '../components/layout/NavBar.jsx'
// import SearchList from '../components/utils/SearchList.jsx'
// import Loading from '../components/utils/Loading'

// export const getStaticProps = async () => {
//   const pokemonJson = data.pokemon
//   const abilityOptions = getAbilityOptions(pokemonJson)
//   const colourOptions = getColourOptions(pokemonJson)
//   const habitatOptions = getHabitatOptions(pokemonJson)
//   const shapeOptions = getShapeOptions(pokemonJson)
//   const typeOptions = getTypeOptions(types)

//   const options = {
//     abilityOptions,
//     colourOptions,
//     habitatOptions,
//     nameOptions,
//     shapeOptions,
//     statusOptions,
//     typeOptions,
//   }

//   return {
//     props: { pokemonJson, options },
//   }
// }

// const Home = ({ pokemonJson, options }) => {
//   const [pokemonCards, setPokemonCards] = useContext(pokemonCardsContext)
//   const { allPokemonDb, isLoading, isError } = useGetAllPokemonDb()

//   if (isError) return <div>OUCH... Something went wrong!</div>
//   if (isLoading) return <Loading />

//   return (
//     <>
//       <Head>
//         <title>PokéPaedia | The Unofficial Pokémon Rankings</title>
//         <meta
//           name="description"
//           content="Come explore Pokepaedia, an encyclopaedia of Pokemon from Pikachu and Snorlax to Flapple and Dreepy, we got them all!"
//         />
//         <link rel="icon" href="/images/favicon.ico" />
//       </Head>
//       <motion.main
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: 1,
//           transition: { duration: 0.5 },
//         }}
//       >
//         <NavBar options={options} allPokemon={pokemonJson} />
//         <SearchList />
//         <Footer />
//       </motion.main>
//     </>
//   )
// }

// export default Home
