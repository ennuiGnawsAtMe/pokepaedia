import Home from './Home'
import { getPokemon } from '../prisma/api/getPokemon'

export default async function Page() {
  const pokemon = await getPokemon()

  return <Home />
}
