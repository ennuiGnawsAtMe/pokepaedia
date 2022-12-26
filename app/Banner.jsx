import NameForm from './NameForm'
import { pokemonImages } from '../data/imgDictionary'
import Image from 'next/image'

const Banner = ({ name }) => {
  return (
    <div className="mt-[18vh] flex h-52 w-screen flex-row justify-center space-x-10 bg-gradient-to-r from-blue-900 to-blue-300 shadow-lg shadow-red-500">
      <div className="flex w-[75vw] flex-row items-center justify-between">
        <div className="flex flex-col space-y-4">
          <p className="font-sans text-lg text-white">
            Welcome Trainer! What is your name?
          </p>
          <NameForm />
        </div>

        <div className="flex">
          <Image
            className="relative rounded-2xl"
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
