import Blurb from './Blurb'
import Banner from './Banner'
import Footer from './Footer'

let apiURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  apiURL = 'http://localhost:3000/api/randomPokemon'
} else if (process.env.NODE_ENV === 'staging') {
  apiURL = 'https://staging.pokepaedia.com/api/randomPokemon'
} else {
  apiURL = 'https://www.pokepaedia.com/api/randomPokemon'
}

const getRandomPokemon = async () => {
  console.log(apiURL)
  const res = await fetch(apiURL, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

export default async function Page() {
  const randomPokemon = await getRandomPokemon()

  return (
    <main className="flex h-screen flex-col items-center justify-between space-y-10">
      <span className="space-y-10">
        <Banner {...randomPokemon} />
        <Blurb {...randomPokemon} />
      </span>
      <Footer />
    </main>
  )
}
