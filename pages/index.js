import Head from 'next/head'
import RandomPokemon from '../components/RandomPokemon.jsx'
// import prisma from '../lib/prisma.js'
import NavBar from '../components/NavBar.jsx'
import data from '../data/all.json'

// export const getStaticProps = async () => {
//     const allPokemon = await prisma.pokemon.findMany({
//       select: {
//         name: true,
//         image: true,
//         blurb: true,
//         pokedex: true
//       },
//     })

//     return {
//     props : { allPokemon }
//   }
// }

 const Home = () => {
   const allPokemon = data.pokemon

    return (
      <>
        <Head>
          <title>PokéPaedia | A Pokémon Encyclopaedia</title>
          <meta name="description" content="An Encyclopaedia of Pokemon" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <main>
          <NavBar />
          <RandomPokemon allPokemon={allPokemon}/>
        </main>
      </>
    )
}

export default Home