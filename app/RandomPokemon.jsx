import Image from 'next/image'
import { getRandomPoke } from '../utils/helpers'
import data from '../data/all.json'

const RandomPokemon = () => {
  const randomPokemon = getRandomPoke(data.pokemon)
  console.log(randomPokemon)

  return (
    <div className="flex w-1/3 flex-col items-end">
      <Image src={randomPokemon.imageLocal} alt={'I choose you!'} priority />
    </div>
  )
}

export default RandomPokemon
