import NameForm from './NameForm'
import Image from 'next/image'
import { getPokemonImage } from '../utils/helpers'
import { capitalise } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'

const Banner = ({ pokemonArray }) => {
  const { imageLocal, name } = pokemonArray[0]
  const image = getPokemonImage(pokemonImages, name)

  return (
    <div className="flex h-[25vh] w-screen flex-row justify-center space-x-10 bg-gradient-to-r from-blue-900 via-lime-400 to-red-900 shadow-2xl shadow-slate-900">
      <div className="flex w-[85vw] max-w-[1920px] flex-row items-center justify-between">
        <NameForm />
        <div className="mt-[35vh] flex shrink-0">
          <Image
            className="relative rounded-2xl"
            src={image}
            alt={name}
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
