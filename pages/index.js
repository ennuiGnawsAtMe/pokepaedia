import Head from 'next/head'
import { useContext, useEffect } from 'react'
import RandomPokemon from '../components/RandomPokemon.jsx'
import NavBar from '../components/NavBar.jsx'
import data from '../data/all.json'
import { getRandomPoke } from '../lib/utils.js'
import logoContext from '../context/logoContext'


export const getStaticProps = async () => {
    const allPokemon = data.pokemon
    return {
      props : { allPokemon }
    }
}

 const Home = ({ allPokemon }) => {
   const [logo, setLogo] = useContext(logoContext)

  useEffect(() => {
    const { image } = getRandomPoke(allPokemon)
    setLogo(image)
  }, [])

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