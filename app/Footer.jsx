import FooterPokemon from './FooterPokemon'
import { pokemonImages } from '../data/imgDictionary'

const Footer = () => {
  const shuffled = Object.entries(pokemonImages).sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, 7)

  return (
    <div className="flex w-[100vw] shrink-0 flex-row justify-center pl-[2vw]">
      {selected.map((pokemon, index) => (
        <FooterPokemon key={pokemon[0]} {...pokemon} />
      ))}
    </div>
  )
}

export default Footer
