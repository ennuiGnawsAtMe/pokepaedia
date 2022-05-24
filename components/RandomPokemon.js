import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import styles from '../styles/RandomPokemon.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

const RandomPokemon = (props) => {
   const { data, error } = useSWR(COMMENTS_URL, fetcher)
   if (error) return <div>Something went wrong...</div>
   if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>PokéPaedia | A Pokémon Encyclopaedia</title>
        <meta name="description" content="An Encyclopaedia of Pokemon" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src={props.image}
                    alt={props.name}
                    layout="fill" 
                    objectFit='contain'
                    priority
                />
            </div>
          <div className={styles.details}>
            <h1>{props.name}</h1>
            <p>{props.blurb}</p>
            <button>&gt;&gt;&gt; Next</button>
          </div>
       </main>
    </>
  )
}

export default RandomPokemon