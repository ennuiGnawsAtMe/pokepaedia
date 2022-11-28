import LuckyDip from './LuckyDip'

const Blurb = ({ blurb, pokedex, name }) => {
  return (
    <div className="flex h-[35vh] w-[75vw]  flex-col justify-between pr-[20vw]">
      <div className="flex flex-col space-y-4 font-sans">
        <h2 className=" text-3xl">#{pokedex}</h2>
        <h2 className=" text-5xl">{name}</h2>
        <h3 className=" text-xl">{blurb}</h3>
      </div>
      <LuckyDip />
    </div>
  )
}

export default Blurb
