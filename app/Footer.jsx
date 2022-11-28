import { pokemonImages } from '../utils/imgDictionary'
import Image from 'next/image'

const Footer = () => {
  const shuffled = Object.values(pokemonImages).sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, 15)

  return (
    <div className="flex w-fit flex-row overflow-x-hidden">
      {selected.map(pokemon => (
        <Image
          className="-mx-20"
          alt="Gotta catch em all!"
          key={pokemon}
          src={pokemon}
          placeholder="blur"
        />
      ))}
    </div>
  )
}

export default Footer
