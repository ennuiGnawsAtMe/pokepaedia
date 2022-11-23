const Blurb = randomPokemon => {
  return (
    <div className="mr-72 flex w-1/3 flex-col space-y-4">
      <h2 className="font-sans text-7xl">{randomPokemon.name}</h2>
      <h3 className="font-sans text-2xl">{randomPokemon.blurb}</h3>
    </div>
  )
}

export default Blurb
