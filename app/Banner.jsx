import NameForm from './NameForm'
import Image from 'next/image'

const Banner = ({ name, imageLocal }) => {
  return (
    <div className="mt-[5vh] flex h-52 w-screen flex-row justify-center space-x-10 bg-gradient-to-r from-blue-900 to-blue-300 shadow-lg shadow-red-500">
      <div className="flex w-[85vw] flex-row items-center justify-between">
        <div className="flex flex-col space-y-4">
          <p className="font-sans text-lg text-white">
            Welcome Trainer! What is your name?
          </p>
          <NameForm />
        </div>

        <div className="mt-40 flex shrink-0">
          <Image
            className="relative rounded-2xl"
            src={imageLocal}
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
