import { pokemonImages } from '../data/imgDictionary'
import Image from 'next/image'

const Footer = () => {
  const shuffled = Object.values(pokemonImages).sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, 7)

  return (
    <div className="flex w-[100vw] shrink-0 flex-row justify-center">
      {selected.map((pokemon, index) => (
        <Image
          className="-ml-[2vw] w-[15vw] duration-200 ease-in-out hover:-translate-y-4 active:-translate-y-2"
          alt="Gotta catch em all!"
          key={index}
          src={pokemon}
          placeholder="blur"
        />
      ))}
    </div>
  )
}

export default Footer
