import Home from './Home'
import getPokemon from '../db/getPokemon'

export default async function Page() {
  const pokemon = await getPokemon()

  return <Home pokemon={pokemon}/>
}