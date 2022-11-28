import NameForm from './NameForm'
import { pokemonImages } from '../utils/imgDictionary'
import Image from 'next/image'

const Banner = ({ name }) => {
  return (
    <div className="mt-48 flex h-48 w-screen flex-row justify-center space-x-10 bg-gradient-to-r from-blue-900 to-blue-300 shadow-lg shadow-red-500">
      <div className="flex w-[75vw] flex-row items-center justify-between">
        <NameForm />
        <div className="flex">
          <Image
            className="rounded-lg"
            src={pokemonImages[name.toLowerCase()]}
            alt={'I Choose You!'}
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
