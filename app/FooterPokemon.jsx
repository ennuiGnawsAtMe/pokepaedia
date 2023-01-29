import Image from 'next/image'
import { capitalise } from '../utils/helpers'
import data from '../data/all.json'

const FooterPokemon = ({ pokemon }) => {
  const [{ pokedex }] = data.pokemon.filter(
    poke => poke.name.toLowerCase() === pokemon[0]
  )

  return (
    <div
      className={`group -mt-24 flex w-[15vw] cursor-pointer flex-col rounded-b-md text-center font-sans opacity-30  hover:opacity-100`}
    >
      <div className=" flex flex-col items-center justify-center rounded-md p-2 text-center group-hover:bg-gray-50  group-hover:drop-shadow-md">
        <h3 className="invisible text-lg group-hover:visible">#{pokedex}</h3>
        <h2 className="invisible font-semibold group-hover:visible md:text-sm lg:text-base xl:text-xl">
          {capitalise(pokemon[0])}
        </h2>
      </div>
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
