const Blurb = randomPokemon => {
  return (
    <div className="flex w-1/2 flex-col space-y-4 pr-40">
      <h2 className="font-serif text-7xl">{randomPokemon.name}</h2>
      <h3 className="font-sans text-2xl">{randomPokemon.blurb}</h3>
    </div>
  )
}

export default Blurb
