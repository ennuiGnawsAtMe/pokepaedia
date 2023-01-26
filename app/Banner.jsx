import NameForm from './NameForm'
import Image from 'next/image'

const Banner = ({ name, imageLocal }) => {
  return (
    <div className="flex h-[25vh] w-screen flex-row justify-center space-x-10 bg-gradient-to-r from-blue-900 via-lime-400 to-red-900 shadow-2xl shadow-slate-900">
      <div className="flex w-[85vw] max-w-[1920px] flex-row items-center justify-between">
        <NameForm />
        <div className="mt-[35vh] flex shrink-0">
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
