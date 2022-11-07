import HomePage from './HomePage'
import getPokemon from '../db/getPokemon'

export default async function Page() {
  const pokemon = await getPokemon()
  console.log(pokemon)

  return <HomePage pokemon={pokemon}/>
}