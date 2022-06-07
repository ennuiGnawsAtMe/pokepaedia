import Head from 'next/head'
import RandomPokemon from '../components/RandomPokemon.jsx'
import NavBar from '../components/NavBar.jsx'
import data from '../data/all.json'

export const getStaticProps = async () => {
    const allPokemon = data.pokemon
    return {
      props : { allPokemon }
    }
}

 const Home = ({ allPokemon }) => {

    return (
      <>
        <Head>
          <title>PokéPaedia | A Pokémon Encyclopaedia</title>
          <meta name="description" content="An Encyclopaedia of Pokemon" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main>
          <NavBar allPokemon={allPokemon}/>
          <RandomPokemon allPokemon={allPokemon}/>
        </main>
      </>
    )
}

export default Home