import Image from 'next/image'
import NameForm from './NameForm'

const Banner = randomPokemon => {
  const { imageLocal } = randomPokemon

  return (
    <div className="mt-48 flex h-48 w-screen flex-row items-center justify-center space-x-10 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-red-500">
      <NameForm />
      <div className="flex">
        <Image src={imageLocal} alt={'I Choose You!'} priority />
      </div>
    </div>
  )
}

export default Banner

// duration-200 ease-in-out hover:translate-x-4
