import prisma from '../../db/prisma'
import { getOrdinalNumbers } from '../../utils/helpers'

const handler = async (req, res) => {
  try {
    const allPokemon = await prisma.pokemon.findMany({
      select: {
        name: true,
        pokedex: true,
        ratingOverall: true,
        ratings: true,
      },
      orderBy: [
        {
          ratingOverall: 'desc',
        },
        {
          ratings: {
            _count: 'desc',
          },
        },
        {
          pokedex: 'asc',
        },
      ],
    })
    const withRankings = allPokemon.map(poke => ({
      ...poke,
      ranking: getOrdinalNumbers(allPokemon.indexOf(poke) + 1),
    }))
    console.log(`/api/pokemon is delivering you the things you need!`)
    return res.status(200).json(withRankings)
  } catch (error) {
    console.error(error)
  }
}

export default handler
