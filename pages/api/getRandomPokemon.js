import prisma from '../../lib/prisma'
import { getRandomId } from '../../lib/controllers'

export default async function handle (req, res) {
  const randomInt = getRandomId()
  const pokemon = await prisma.pokemon.findUnique({
      where: {
        pokedex: randomInt,
      },
        select: { 
          name: true, 
          image: true, 
          blurb: true 
        }
      })
    res.json(pokemon)
}

