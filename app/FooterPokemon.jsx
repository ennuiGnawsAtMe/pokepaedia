import Image from 'next/image'
import { capitalise } from '../utils/helpers'
import data from '../data/all.json'

const FooterPokemon = pokemon => {
  const [{ pokedex }] = data.pokemon.filter(
    poke => poke.name.toLowerCase() === pokemon[0]
  )

  return (
    <div className="group -ml-[2vw] flex w-[15vw] cursor-pointer flex-col rounded-b-md text-center font-sans duration-500 ease-in-out hover:-translate-y-20 hover:bg-white hover:shadow-2xl hover:shadow-slate-900">
      <div className="mb-4 flex flex-col items-center justify-center rounded-md bg-gradient-to-b  p-2 text-center text-white group-hover:scale-125 group-hover:from-blue-900 group-hover:via-lime-400 group-hover:to-red-900 group-hover:shadow-xl group-hover:shadow-slate-900">
        <h3 className="invisible text-lg group-hover:visible">#{pokedex}</h3>
        <h2 className="invisible font-semibold group-hover:visible md:text-base lg:text-lg xl:text-2xl">
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
