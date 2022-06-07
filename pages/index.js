import Head from 'next/head'
import RandomPokemon from '../components/RandomPokemon.jsx'
import { getRandomPoke } from '../lib/utils'
import NavBar from '../components/NavBar.jsx'
import data from '../data/all.json'

export const getServerSideProps = async () => {
    const allPokemon = data.pokemon
    const randomPokemon = getRandomPoke(allPokemon)
    return {
      props : { initialPokemon: randomPokemon, allPokemon }
    }
}

 const Home = ({ initialPokemon, allPokemon }) => {

    return (
      <>
        <Head>
          <title>PokéPaedia | A Pokémon Encyclopaedia</title>
          <meta name="description" content="An Encyclopaedia of Pokemon" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main>
          <NavBar allPokemon={allPokemon}/>
          <RandomPokemon initialPokemon={initialPokemon} allPokemon={allPokemon}/>
        </main>
      </>
    )
}

export default Home