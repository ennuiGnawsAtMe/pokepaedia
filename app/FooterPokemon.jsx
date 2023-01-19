import Image from 'next/image'
import { capitalise } from '../utils/helpers'
import data from '../data/all.json'

const FooterPokemon = pokemon => {
  const [{ pokedex }] = data.pokemon.filter(
    poke => poke.name.toLowerCase() === pokemon[0]
  )

  console.log(pokedex)

  return (
    <div className="group -ml-[2vw] flex w-[15vw] flex-col duration-200 ease-in-out hover:-translate-y-4 active:-translate-y-2">
      <h2 className="invisible text-base group-hover:visible">#{pokedex}</h2>
      <h3 className="invisible text-lg group-hover:visible">
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
