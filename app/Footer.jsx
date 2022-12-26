import { pokemonImages } from '../data/imgDictionary'
import Image from 'next/image'

const Footer = () => {
  const shuffled = Object.values(pokemonImages).sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, 15)

  return (
    <div className=" flex w-fit flex-row overflow-x-hidden pt-10">
      {selected.map((pokemon, index) => (
        <Image
          className="-mx-20"
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
