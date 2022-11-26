import Blurb from './Blurb'
import { getRandomPokemon } from '../utils/helpers'
import data from '../public/data/all.json'
import Banner from './Banner'

export default async function Page() {
  const randomPokemon = getRandomPokemon(data.pokemon)

  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-10">
      <Banner {...randomPokemon} />
      <Blurb {...randomPokemon} />
    </main>
  )
}
