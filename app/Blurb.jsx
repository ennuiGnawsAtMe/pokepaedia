const Blurb = ({ blurb, pokedex, name }) => {
  return (
    <div className="m-auto flex w-[85vw] flex-col pr-[20vw]">
      <div className="flex flex-col space-y-4 pr-40 font-sans">
        <h2 className=" text-3xl">#{pokedex}</h2>
        <h2 className=" text-5xl">{name}</h2>
        <h3 className=" text-lg">{blurb}</h3>
      </div>
    </div>
  )
}

export default Blurb
