import Blurb from './Blurb'
import NameForm from './NameForm'
import { getRandomPokemon } from '../utils/helpers'
import data from '../data/all.json'

export default async function Page() {
  const randomPokemon = getRandomPokemon(data.pokemon)

  return (
    <div className="flex min-h-screen flex-col items-center justify-start space-y-28">
      <NameForm {...randomPokemon} />
      <Blurb {...randomPokemon} />
    </div>
  )
}
