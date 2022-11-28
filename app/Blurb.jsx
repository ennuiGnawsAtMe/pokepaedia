import LuckyDip from './LuckyDip'

const Blurb = ({ imageLocal, blurb, pokedex, name }) => {
  return (
    <div className="flex w-[75vw] flex-col space-y-4 pr-[20vw] font-sans">
      <h2 className=" text-3xl">#{pokedex}</h2>
      <h2 className=" text-5xl">{name}</h2>
      <h3 className=" text-2xl">{blurb}</h3>
      <LuckyDip />
    </div>
  )
}

export default Blurb
