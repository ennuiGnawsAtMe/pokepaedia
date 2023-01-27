import Image from 'next/image'
import { capitalise } from '../utils/helpers'
import data from '../data/all.json'

const FooterPokemon = pokemon => {
  const [{ pokedex }] = data.pokemon.filter(
    poke => poke.name.toLowerCase() === pokemon[0]
  )

  return (
    <div className="group -mt-24 -ml-[2vw] flex w-[15vw] cursor-pointer flex-col rounded-b-md text-center font-sans hover:duration-500 hover:ease-in">
      <div className=" flex flex-col items-center justify-center rounded-md p-2 text-center group-hover:bg-gray-50  group-hover:drop-shadow-md">
        <h3 className="invisible text-lg group-hover:visible">#{pokedex}</h3>
        <h2 className="invisible font-semibold group-hover:visible md:text-sm lg:text-base xl:text-xl">
          {capitalise(pokemon[0])}
        </h2>
      </div>
      <Image
        className="group-hover:p-4"
        alt="Gotta catch em all!"
        src={pokemon[1]}
        placeholder="blur"
      />
    </div>
  )
}

export default FooterPokemon
