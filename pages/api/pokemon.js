import prisma from '../../lib/prisma'

const handler = async (req, res) => {
  try {
    const allPokemon = await prisma.pokemon.findMany({
        select: {
            name: true,
            pokedex: true,
            ratingOverall: true, 
            ratings: true,
            comments: true
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
          }
        ],
    })
    console.log(`/api/pokemon is delivering you the things you need!`)
    return res.status(200).json(allPokemon)
  } catch (error) {
    console.error(error)
  }  
}

export default handler