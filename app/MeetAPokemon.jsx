import Image from 'next/image'
import { getRandomPoke } from '../utils/helpers'
import data from '../data/all.json'

const MeetAPokemon = () => {
  const randomPokemon = getRandomPoke(data.pokemon)
  console.log(randomPokemon)

  return (
    <div className="flex w-1/3 flex-col">
      <div className="flex w-1/3 flex-col items-end">
        <Image src={randomPokemon.imageLocal} alt={'I choose you!'} priority />
      </div>
      <div>
        <h2 className="font-mono text-3xl">{randomPokemon.name}</h2>
        <h3 className="font-sans text-xl">{randomPokemon.blurb}</h3>
      </div>
    </div>
  )
}

export default MeetAPokemon
