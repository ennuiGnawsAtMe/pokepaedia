import Banner from './PageContent'
import Footer from './Footer'
import PageContent from './PageContent'

let apiURL

if (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'development') {
  apiURL = 'http://localhost:3000/api/randomPokemon'
} else if (process.env.VERCEL_ENV === 'preview') {
  apiURL = 'https://staging.pokepaedia.com/api/randomPokemon'
} else {
  apiURL = 'https://www.pokepaedia.com/api/randomPokemon'
}

const getRandomPokemon = async () => {
  const res = await fetch(apiURL, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

export default async function Page() {
  const pokemonArray = await getRandomPokemon()

  return (
    <main className="flex h-screen max-h-screen flex-col items-center justify-between space-y-10">
      <PageContent pokemonArray={pokemonArray} />
    </main>
  )
}
