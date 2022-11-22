import Image from 'next/image'
import { getRandomPokemon } from '../utils/helpers'
import data from '../data/all.json'
import { pokemonImages } from '../data/imgDictionary'

const PokemonCarousel = () => {
  const randomPokemon = getRandomPokemon(data.pokemon)
  console.log(randomPokemon)

  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="flex w-[35vw] flex-col items-center align-middle">
        <Image
          src={randomPokemon.imageLocal}
          alt={randomPokemon.name}
          priority
        />
      </div>
      <div className="flex w-[35vw] flex-col pl-6">
        <h2 className="pb-6 font-mono text-5xl">{randomPokemon.name}</h2>
        <h3 className="font-sans text-xl">{randomPokemon.blurb}</h3>
      </div>
    </div>
  )
}

export default PokemonCarousel
