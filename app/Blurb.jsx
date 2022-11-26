const Blurb = ({ imageLocal, blurb, pokedex, name }) => {
  return (
    <div className="mr-72 flex w-[50vw] flex-col space-y-4 font-sans">
      <h2 className=" text-3xl">#{pokedex}</h2>
      <h2 className=" text-5xl">{name}</h2>
      <h3 className=" text-2xl">{blurb}</h3>
    </div>
  )
}

export default Blurb
