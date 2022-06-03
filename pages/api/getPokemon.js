import prisma from '../../lib/prisma'

export default async function handle (req, res) {
  const pokemon = await prisma.pokemon.findMany({
      where: {
        pokedex: { in: arrayOfPokedex },
      },
        include: { 
          type: true, 
          ability: true, 
        }
      })
    res.json(pokemon)
}