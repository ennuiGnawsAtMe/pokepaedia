import prisma from '../ client'
import { getOrdinalNumbers } from '../../utils/helpers'

export const getPokemon = async () => {
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
    console.log(`Pokemon Fetched!`)
    return withRankings
  } catch (error) {
    throw new Error(error)
  }
}
