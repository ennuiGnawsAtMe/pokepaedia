import Image from 'next/image'
import { capitalise } from '../utils/helpers'
import data from '../data/all.json'

const FooterPokemon = pokemon => {
  const [{ pokedex }] = data.pokemon.filter(
    poke => poke.name.toLowerCase() === pokemon[0]
  )

  return (
    <div className="group -ml-[2vw] flex w-[15vw] flex-col rounded-xl  bg-gradient-to-b pt-2 text-center font-sans text-white duration-200 ease-in-out hover:-translate-y-4 hover:from-red-900 hover:to-white active:-translate-y-2">
      <h2 className="invisible text-lg group-hover:visible">#{pokedex}</h2>
      <h3 className="invisible text-xl group-hover:visible">
        {capitalise(pokemon[0])}
      </h3>
      <Image
        className=""
        alt="Gotta catch em all!"
        src={pokemon[1]}
        placeholder="blur"
      />
    </div>
  )
}

export default FooterPokemon
