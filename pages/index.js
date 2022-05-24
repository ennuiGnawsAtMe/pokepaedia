import Head from 'next/head'
import RandomPokemon from '../components/RandomPokemon'
import { getRandomPokemon, capitalise } from '../lib/controllers'

export const getServerSideProps = async() => {
  const pokemons = await getRandomPokemon()
  return {
    props: {
      pokemon: {
        name: capitalise(pokemons.name),
        blurb: pokemons.blurbEng,
        image: pokemons.image
      }
    }
  }
}

 const Home = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>PokéPaedia | A Pokémon Encyclopaedia</title>
        <meta name="description" content="An Encyclopaedia of Pokemon" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <RandomPokemon {...pokemon}/>
      </main>
    </>
  )
}

export default Home