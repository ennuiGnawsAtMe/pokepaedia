const Blurb = ({ blurb, pokedex, name }) => {
  return (
    <div className="m-auto flex w-[85vw] max-w-[1920px] flex-col pr-[30vw]">
      <div className="flex flex-col space-y-4 pr-40 font-sans">
        <h2 className=" text-3xl">#{pokedex}</h2>
        <h2 className="text-5xl font-semibold">{name}</h2>
        <h3 className=" text-2xl">{blurb}</h3>
      </div>
    </div>
  )
}

export default Blurb
