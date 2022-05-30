import Head from 'next/head'
import prisma from '../lib/prisma'
import Detail from '../components/Detail'
import Image from 'next/image'
import styles from '../styles/Page.module.css'
import { getOnePokemonAsync } from '../lib/controllers'

export const getStaticPaths = async () => {
  const pokemonNames = await prisma.pokemon.findMany({
    select: { name: true }
  })

  const paths = pokemonNames.map(pokeName => ({
    params: { pokemon: pokeName.name.toLowerCase()}
  }))

  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
      const newPokemon = await getOnePokemonAsync(params.pokemon)

      return { props: { newPokemon }}
  }

 const PokemonDetail = ({ newPokemon }) => {
   console.log(newPokemon)
  return (
    <div className={styles.container}>
      <Head>
        <title>{newPokemon.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Detail pokemon={newPokemon}/>
      </main>
    </div>
  )
}

export default PokemonDetail