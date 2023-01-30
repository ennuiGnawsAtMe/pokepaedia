import { getPokemonImage } from '../utils/helpers'
import { pokemonImages } from '../data/imgDictionary'

const Blurb = ({ pokemonArray }) => {
  const { pokedex, name, blurb } = pokemonArray[0]

  return (
    <div className="m-auto flex w-[85vw]  max-w-[1920px] flex-col">
      <div className="flex flex-col space-y-4 font-sans">
        <h2 className=" text-3xl">#{pokedex}</h2>
        <h2 className="text-5xl font-semibold">{name}</h2>
        <h3 className="w-1/2 text-2xl">{blurb}</h3>
      </div>
    </div>
  )
}

export default Blurb
